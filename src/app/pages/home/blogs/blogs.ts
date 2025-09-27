import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogCard } from '../../../shared/components/blog-card/blog-card';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../shared/directives/swiper.directive';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogCard, SwiperDirective],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Blogs {
  blogs = [
    {
      title: 'Modern Villa Design Trends for 2025',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      date: 'Sep 20, 2025',
      location: 'New York, NY',
    },
    {
      title: 'Cozy Apartment Renovation Ideas',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      date: 'Sep 18, 2025',
      location: 'Los Angeles, CA',
    },
    {
      title: 'Luxury Penthouse with Ocean View',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      date: 'Sep 15, 2025',
      location: 'Miami, FL',
    },
    {
      title: 'Eco-Friendly Home Building Guide',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      date: 'Sep 12, 2025',
      location: 'Seattle, WA',
    },
    {
      title: 'Urban Loft Conversion Tips',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      date: 'Sep 10, 2025',
      location: 'Chicago, IL',
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
    injectStyles: [
      `
        .featured-pagination {
          bottom: 10px;
        }
        .featured-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .featured-pagination .swiper-pagination-bullet-active {
          background: var(--accent-color);
          width: 12px;
          height: 12px;
        }
      `,
    ],
  };
}
