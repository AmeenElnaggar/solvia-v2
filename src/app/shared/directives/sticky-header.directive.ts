import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  PLATFORM_ID,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appScrollDirection]',
  standalone: true,
})
export class StickyHeaderDirective {
  #el = inject(ElementRef);
  #renderer = inject(Renderer2);
  #platformId = inject(PLATFORM_ID);

  #lastScrollTop: number = 100;
  #isHidden = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.#platformId)) return;
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.#lastScrollTop && currentScroll > 100 && !this.#isHidden()) {
      this.#renderer.setStyle(this.#el.nativeElement, 'transform', 'translateY(-100%)');
      this.#isHidden.set(true);
    } else if (currentScroll < this.#lastScrollTop && this.#isHidden()) {
      this.#renderer.setStyle(this.#el.nativeElement, 'transform', 'translateY(0)');
      this.#isHidden.set(false);
    }

    if (currentScroll < 100) {
      this.#renderer.addClass(this.#el.nativeElement, 'header-top');
    } else {
      this.#renderer.removeClass(this.#el.nativeElement, 'header-top');
    }

    this.#lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensuring non-negative scroll value
  }
}
