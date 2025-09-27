import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { SwiperDirective } from '../../../shared/directives/swiper.directive';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SwiperDirective, RouterLink, CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Categories {
  activeIndex = signal(0);

  categories = [
    { title: 'Apartment', count: 234, icon: 'fa-solid fa-building-wheat' },
    { title: 'Villa', count: 234, icon: 'fa-solid fa-house' },
    { title: 'Studio', count: 234, icon: 'fa-solid fa-hotel' },
    { title: 'Office', count: 234, icon: 'fa-regular fa-building' },
    { title: 'Townhouse', count: 234, icon: 'fa-solid fa-city' },
    { title: 'Commerical', count: 234, icon: 'fa-solid fa-tree-city' },
  ];

  swiperConfig: SwiperOptions = {
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    effect: 'slide',
    grabCursor: true,
    slidesPerView: 3,
    pagination: {
      clickable: true,
      el: '.categories-pagination',
    },
    navigation: {
      nextEl: '.projects-controllers .next-button',
      prevEl: '.projects-controllers .prev-button',
    },
    on: {
      slideChange: (swiper) => {
        this.activeIndex.set(swiper.activeIndex);
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  };

  selectCategory(index: number) {
    this.activeIndex.set(index);
  }
}
