import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../shared/directives/swiper.directive';

@Component({
  selector: 'app-new-projects',
  imports: [ProjectCard, SwiperDirective],
  templateUrl: './new-projects.html',
  styleUrl: './new-projects.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewProjects {
  projects = [
    {
      title: 'Minimalist Living Room',
      price: 4500000,
      location: 'Central London, UK',
      image: 'https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_1280.jpg',
      features: { beds: 3, baths: 2, area: '1200 Sqft' },
    },
    {
      title: 'Modern Apartment',
      price: 2200000,
      location: 'Berlin, Germany',
      image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
      features: { beds: 2, baths: 1, area: '850 Sqft' },
    },
    {
      title: 'Luxury Villa',
      price: 7500000,
      location: 'Dubai, UAE',
      image: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
      features: { beds: 5, baths: 4, area: '3500 Sqft' },
    },
    {
      title: 'Cozy Cottage',
      price: 1200000,
      location: 'Provence, France',
      image: 'https://cdn.pixabay.com/photo/2024/03/07/15/57/houses-8618837_1280.jpg',
      features: { beds: 2, baths: 1, area: '950 Sqft' },
    },
    {
      title: 'Beachfront House',
      price: 6400000,
      location: 'Malibu, USA',
      image:
        'https://media.istockphoto.com/id/1540164261/photo/luxury-house-with-swimming-pool-at-night.jpg?s=1024x1024&w=is&k=20&c=mH0_Na1pJhxhDjOuKpkP05O9iR5mr8F3PgkqVo9LeCQ=',
      features: { beds: 4, baths: 3, area: '2800 Sqft' },
    },
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
      el: '.projects-controllers .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.projects-controllers .next-button',
      prevEl: '.projects-controllers .prev-button',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
}
