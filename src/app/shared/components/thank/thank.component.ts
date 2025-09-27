import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-thank',
  standalone: true,
  imports: [TranslocoModule],
  template: `
    <section class="section flex align-items-center justify-content-center h-full">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title text-4xl text-white">
            {{ 'Thank You for Contact us and we contact with you ASAP' }}
          </h2>
        </div>
      </div>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThankComponent {}
