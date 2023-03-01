import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter,withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from '@akur8/core/posts';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(BrowserAnimationsModule)
  ],
}).catch((err) => console.error(err));
