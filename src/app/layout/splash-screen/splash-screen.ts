import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  imports: [],
  templateUrl: './splash-screen.html',
  styleUrl: './splash-screen.scss',
})
export class SplashScreen {
  platformId = inject(PLATFORM_ID);
  display = signal(true);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.display.set(false);
      }, 1500);
    }
  }

  // ngAfterViewInit() {
  //   const paths = document.querySelectorAll('path');
  //   paths.forEach((p, index) => {
  //     const length = (p as SVGPathElement).getTotalLength();
  //     console.log(`Path ${index + 1} length:`, length);
  //   });
  // }
}
