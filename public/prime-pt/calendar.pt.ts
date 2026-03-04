import { DatePickerPassThrough } from "primeng/datepicker";

export const CalendarPt: DatePickerPassThrough = {
    panel: 'grid! grid-cols-15! px-1! py-3!',
    calendarContainer: 'col-span-12! [&>.p-datepicker-calendar]:p-0!',
    buttonbar: 'col-span-15! p-0!',
    header: 'border-r! border-gray-300!',
};