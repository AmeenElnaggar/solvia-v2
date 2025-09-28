import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../shared/directives/swiper.directive';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Partners {
  partners = [
    {
      name: 'RE/MAX',
      logo: 'https://cdn.pixabay.com/photo/2024/11/29/02/27/ai-generated-9231987_640.jpg',
    },
    {
      name: 'Arab ',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/29/adh.jpg',
    },
    {
      name: 'Artal',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/10/artal-.jpg',
    },
    {
      name: 'Akam ',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/46/akam.png',
    },
    {
      name: 'City Edge ',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/36/353814941_644936621015857_8351510606571512210_n.jpg',
    },
    {
      name: 'LMD',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/19/309789735_474609424703840_7202625992076014237_n.jpg',
    },
    {
      name: 'Mountain View',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/76/mountainview.jpg',
    },
    {
      name: 'RE/MAX',
      logo: 'https://cdn.pixabay.com/photo/2024/11/29/02/27/ai-generated-9231987_640.jpg',
    },
    {
      name: 'Arab ',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/29/adh.jpg',
    },
    {
      name: 'Artal',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/10/artal-.jpg',
    },
    {
      name: 'Akam ',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/46/akam.png',
    },
    {
      name: 'City Edge ',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/36/353814941_644936621015857_8351510606571512210_n.jpg',
    },
    {
      name: 'LMD',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/19/309789735_474609424703840_7202625992076014237_n.jpg',
    },
    {
      name: 'Mountain View',
      logo: 'https://dev.8worx.com/mn-hna-ree-live/storage/76/mountainview.jpg',
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
    slidesPerView: 10,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 9,
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
