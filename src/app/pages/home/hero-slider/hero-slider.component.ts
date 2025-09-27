import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../shared/directives/swiper.directive';
import { SiteButtonComponent } from '../../../shared/components/site-button/site-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [SiteButtonComponent, SwiperDirective, TranslocoModule, CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSliderComponent {
  index = signal(0);

  contents = signal([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title_en:
        'Minimalist Living Room Minimalist Living Room Minimalist Living Room Minimalist Living Room Minimalist Living Room Minimalist Living Room',
      title_ar: 'غرفة معيشة مينيماليست',
      description_en: 'Discover stunning modern building designs.',
      description_ar: 'اكتشف تصاميم المباني الحديثة الرائعة.',
      project: {
        project_slug: 'minimalist-living-room',
      },
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      title_en: 'Modern Apartment',
      title_ar: 'شقة حديثة',
      description_en: 'Experience eco-friendly city landscapes.',
      description_ar: 'استمتع بالمناظر الطبيعية الصديقة للبيئة في المدن.',
      project: {
        project_slug: 'modern-apartment',
      },
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      title_en: 'Luxury Villa',
      title_ar: 'فيلا فاخرة',
      description_en: 'Premium residences with world-class amenities.',
      description_ar: 'إقامات فاخرة مع وسائل راحة عالمية.',
      project: {
        project_slug: 'luxury-villa',
      },
    },
  ]);

  swiperConfig: SwiperOptions = {
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-100%', 0, -1000],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    navigation: true,
    grabCursor: true,
    pagination: {
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    on: {
      slideChangeTransitionStart: (swiper) => {
        this.index.set(swiper.activeIndex);
      },
    },
    injectStyles: [
      `
        :host { --swiper-theme-color: var(--primary-color) }
        .swiper-button-next, .swiper-button-prev {
          width: 25px;
          height: 25px;
          padding: 8px;
          background-color: rgba(255, 255, 255, 0.75);
          color: #242424;
        }
        .swiper-pagination {
          bottom: 40px !important;
          right: 40px !important;
          left: auto !important;
          width: auto !important;
          display: flex;
          gap: 12px;
          z-index: 10;
        }
        .swiper-pagination-bullet {
          width: 35px;
          height: 35px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          opacity: 1;
        }
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-color);
          color: #fff;
          transform: scale(1.15);
          border-color: var(--accent-color);
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          .swiper-button-prev {
            left: 15px;
          }
          .swiper-button-next {
            right: 15px;
          }
          .swiper-pagination {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
      `,
    ],
  };
}
