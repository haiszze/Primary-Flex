import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Noir } from './themes/noir';

import { routes } from './app.routes';


import { CalendarPt } from '../../public/prime-pt/calendar.pt';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    HttpClientModule,
    provideHttpClient(),
    providePrimeNG({
      pt: {
        datepicker: CalendarPt
      },
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.primeng-mobile-adapter-dark'
        }
      }
    })
  ]
};
