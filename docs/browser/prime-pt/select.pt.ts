import { signal } from '@angular/core';
import { PassThroughContext } from 'primeng/api';
import { Select, SelectPassThrough } from 'primeng/select';
import { PlatformUtil } from './platform.util';

export const SelectPt: SelectPassThrough = {
  root: (context: PassThroughContext<Select>) => {
    const instance = context.instance as any;

    if (!PlatformUtil.mobile()) {
      instance.$appendTo = signal('self');
    } else {
      instance.$appendTo = signal('body');
    }

    const overlay = document.querySelector('.p-select-overlay');

    if (instance.$appendTo() === 'body' && !document.querySelector('.select-cancel-option')) {
      const cancel = document.createElement('div');
      cancel.className =
        'select-cancel-option sticky bottom-0 bg-white text-gray-500 border-t border-gray-200 ' +
        'text-start p-3 font-medium cursor-pointer z-[99] hover:bg-gray-100 mt-auto';
      cancel.textContent = 'Cancel';

      cancel.addEventListener('click', () => {
        instance.hide();
        instance.writeValue === undefined;
      });
      overlay?.appendChild(cancel);
    }
  },
  pcOverlay: {
    root: () => {
      const isMobile = PlatformUtil.mobile();

      return isMobile ? 'h-full! top-0! left-0! bg-black/40 mt-0! min-w-[100vw]!' : 'w-full!';
    },
    content: () => {
      return PlatformUtil.mobile()
        ? 'max-h-full! absolute bottom-0 max-sm:w-full w-[60vw] left-1/2! -translate-x-1/2! [&>.p-select-overlay]:rounded-b-none! [&>.p-select-overlay]:max-h-[80vh]! [&>.p-select-overlay]:flex! [&>.p-select-overlay]:flex-col!'
        : 'transform [&>.p-select-overlay]:h-full! [&>.p-select-overlay]:overflow-hidden!';
    },
  },
  listContainer: () => {
    return PlatformUtil.mobile() ? 'max-h-full! flex-1!' : 'px-0! [&>.p-select-list]:px-0!';
  },
  optionLabel: 'whitespace-normal break-words hyphen-auto! w-full!',
};
