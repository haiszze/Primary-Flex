import { signal } from '@angular/core';
import { PassThroughContext } from 'primeng/api';
import { MultiSelect, MultiSelectPassThrough } from 'primeng/multiselect';
import { PlatformUtil } from './platform.util';

export const MultiSelectPt: MultiSelectPassThrough = {
  root: (context: PassThroughContext<MultiSelect>) => {
    const instance = context.instance as any;

    if (!PlatformUtil.mobile()) {
      instance.$appendTo = signal('self');
    } else {
      instance.$appendTo = signal('body');
    }

    const overlay = document.querySelector('.p-multiselect-overlay');
    if (
      overlay &&
      instance.$appendTo() === 'body' &&
      !overlay.querySelector('.select-cancel-option')
    ) {
      const cancel = document.createElement('div');
      cancel.className =
        'select-cancel-option sticky bottom-0 bg-white text-gray-500 border-t border-gray-200 ' +
        'text-start p-3 font-medium cursor-pointer z-[99] hover:bg-gray-100 mt-auto';
      cancel.textContent = 'Cancel';

      cancel.addEventListener('click', () => {
        instance.hide();
        instance.writeValue(null);
      });
      overlay.appendChild(cancel);
    }
  },
  overlay: (context: PassThroughContext<MultiSelect>) => {
    const instance = context.instance as any;
    const mobile = PlatformUtil.mobile();

    if (instance.$appendTo() === 'body') {
      const overlayEl = document.querySelector('.p-component-overlay');
      const overlayContent = overlayEl?.closest('.p-overlay-content');
      const pcOverlayRoot = overlayContent?.closest('.p-overlay');

      if (pcOverlayRoot) {
        if (mobile) {
          pcOverlayRoot.classList.add(
            'h-full!',
            'top-0!',
            'left-0!',
            'bg-black/40',
            'mt-0!',
            'min-w-[100vw]!'
          );
        } else {
          pcOverlayRoot.classList.add('w-full!');
        }
      }

      if (overlayContent) {
        if (mobile) {
          overlayContent.classList.add(
            'max-h-full!',
            'absolute',
            'bottom-0',
            'w-full',
            'left-1/2!',
            '-translate-x-1/2!',
            'max-h-[80vh]!',
						'max-sm:w-full!',
            'w-[60vw]!'
          );
        } else {
          overlayContent.classList.add('transform');
        }
      }
    }
    return {
      class: mobile ? 'h-full! overflow-hidden! max-h-[80vh]! flex! flex-col! rounded-b-none!' : '',
    };
  },
  header: 'px-3!',
  listContainer: () => {
    return PlatformUtil.mobile() ? 'max-h-full! flex-1!' : 'px-0! [&>.p-multiselect-list]:px-0!';
  },
  option:
    '[&>.ng-star-inserted]:whitespace-normal [&>.ng-star-inserted]:break-words [&>.ng-star-inserted]:hyphen-auto! [&>.ng-star-inserted]:w-full!',
};
