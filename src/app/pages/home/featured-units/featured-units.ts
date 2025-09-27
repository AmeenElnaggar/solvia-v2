import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../shared/directives/swiper.directive';
import { UnitCard } from '../../../shared/components/unit-card/unit-card';

@Component({
  selector: 'app-featured-units',
  standalone: true,
  imports: [UnitCard, SwiperDirective],
  templateUrl: './featured-units.html',
  styleUrl: './featured-units.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedUnits {
  units = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Elegant Studio Flat',
      location: '102 Ingraham St, Brooklyn, NY 11237',
      beds: 1,
      baths: 1,
      sqft: 750,
      price: '$1,200',
      badges: ['Featured', 'For Sale'],
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      title: 'Spacious Modern Villa',
      location: '456 Oak Ave, Los Angeles, CA 90001',
      beds: 4,
      baths: 3,
      sqft: 3000,
      price: '$6,500',
      badges: ['For Sale'],
    },
    {
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Cozy Townhouse Retreat',
      location: '789 Pine Rd, Austin, TX 73301',
      beds: 3,
      baths: 2,
      sqft: 1800,
      price: '$3,800',
      badges: ['Featured'],
    },
    {
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Luxury Penthouse Suite',
      location: '321 Maple St, Chicago, IL 60601',
      beds: 2,
      baths: 2,
      sqft: 1500,
      price: '$4,200',
      badges: ['For Sale', 'Featured'],
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Modern Office Space',
      location: '654 Elm St, San Francisco, CA 94105',
      beds: 0,
      baths: 2,
      sqft: 2500,
      price: '$5,000',
      badges: ['For Sale'],
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title: 'Riverside Apartment',
      location: '987 Cedar Ln, Seattle, WA 98101',
      beds: 2,
      baths: 1,
      sqft: 1200,
      price: '$2,300',
      badges: ['Featured'],
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
