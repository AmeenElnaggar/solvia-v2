import { Directive, ElementRef, afterNextRender, effect, inject, input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
// register Swiper custom elements
register();

@Directive({
  selector: '[appSwiper]',
  standalone: true,
})
export class SwiperDirective {
  #el = inject(ElementRef<SwiperContainer>);
  config = input<SwiperOptions>({} as SwiperOptions);

  constructor() {
    afterNextRender(() => {
      Object.assign(this.#el.nativeElement, this.config());
      this.#el.nativeElement.initialize();
    });
  }
}
