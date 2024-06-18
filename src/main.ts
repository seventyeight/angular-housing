import {
  Component,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home.component';
import { DetailsComponent } from './app/details.component';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styles: `
      :host {
      --content-padding: 10px;
    }
    header {
      display: block;
      height: 60px;
      padding: var(--content-padding);
      box-shadow: 0px 5px 25px var(--shadow-color);
    }
    .content {
      padding: var(--content-padding);
    }
  `,
})
export class AppComponent {
  title = 'homes';
}

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter([
      {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
      },
    ]),
  ],
});
