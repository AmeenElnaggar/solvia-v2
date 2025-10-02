import { Component, CUSTOM_ELEMENTS_SCHEMA, input, signal } from '@angular/core';
import { SwiperDirective } from '../../shared/directives/swiper.directive';
import { SwiperOptions } from 'swiper/types';
import { Image } from 'primeng/image';
import { NoSanitizePipe } from '../../shared/pipes/no-sanitize.pipe';
import { DialogModule } from 'primeng/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { project } from '../../shared/model/project-type';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    SwiperDirective,
    NoSanitizePipe,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    TextareaModule,
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class ProjectDetails {
  project_slug = input<string>();
  visible = true;
  contactForm: FormGroup;

  displayVideo = signal<boolean>(false);

  project = signal<project>({
    gallery_images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    title_en: 'Nextgen Riverside',
    address_en: '102 Ingraham St, Brooklyn, NY 11237',
    project_price: 1250000,
    purposes: [
      {
        id: 6,
        slug: 'studio',
        name_en: 'Studio',
        name_ar: 'ستوديو',
        default_name: 'Studio',
        image: 'assets/images/purposes/studio.jpg',
        order: 6,
      },
      {
        id: 7,
        slug: 'shophouse',
        name_en: 'Shophouse',
        name_ar: 'متجر',
        default_name: 'Shophouse',
        image: 'assets/images/purposes/shophouse.jpg',
        order: 7,
      },
    ],
    area: 1450,
    areaUnit: {
      id: 1,
      slug: 'sqft',
      name_en: 'Square Feet',
      name_ar: 'قدم مربع',
      default_name: 'sqft',
      image: 'assets/images/area-units/sqft.jpg',
      order: 1,
    },
    latitude: 30.0451294,
    longitude: 31.2230503,
    video_iframe:
      '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61580320494471%2Fvideos%2F1861119641140066%2F&show_text=0&width=476" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
  });

  mapUrl = `https://www.google.com/maps?q=${this.project().latitude},${
    this.project().longitude
  }&hl=es;z=14&output=embed`;

  amenities = [
    { title: 'Apartment', count: 234, icon: 'fa-solid fa-building-wheat' },
    { title: 'Villa', count: 234, icon: 'fa-solid fa-house' },
    { title: 'Studio', count: 234, icon: 'fa-solid fa-hotel' },
    { title: 'Office', count: 234, icon: 'fa-regular fa-building' },
    { title: 'Townhouse', count: 234, icon: 'fa-solid fa-city' },
    { title: 'Commerical', count: 234, icon: 'fa-solid fa-tree-city' },
    { title: 'Apartment', count: 234, icon: 'fa-solid fa-building-wheat' },
    { title: 'Villa', count: 234, icon: 'fa-solid fa-house' },
    { title: 'Studio', count: 234, icon: 'fa-solid fa-hotel' },
    { title: 'Office', count: 234, icon: 'fa-regular fa-building' },
    { title: 'Townhouse', count: 234, icon: 'fa-solid fa-city' },
    { title: 'Commerical', count: 234, icon: 'fa-solid fa-tree-city' },
  ];
  planData = signal([
    {
      floor: 'First Floor',
      bedrooms: 2,
      bathrooms: 2,
      image:
        'https://www.basearchitecture.co.uk/wp-content/uploads/2022/08/Housing-Development-Master-Plan.jpeg',
      isActive: true,
    },
    {
      floor: 'Second Floor',
      bedrooms: 2,
      bathrooms: 2,
      image:
        'https://www.basearchitecture.co.uk/wp-content/uploads/2022/08/Housing-Development-Master-Plan.jpeg',
      isActive: false,
    },
  ]);

  locationData = signal({
    address: '2972 Westheimer Rd, Santa Ana,',
    city: 'Santa Ana',
    state: 'Illinois',
    zipCode: '85486',
    coordinates: {
      lat: 33.7455,
      lng: -117.8677,
    },
    transport: {
      coast: {
        name: 'Coast',
        distance: '300m',
      },
      university: {
        name: 'University',
        distance: '750m',
      },
      supermarket: {
        name: 'Supermarket',
        distance: '500m',
      },
      park: {
        name: 'Park',
        distance: '1120m',
      },
      railwayStation: {
        name: 'Railway station',
        distance: '1750m',
      },
      airport: {
        name: 'Airport',
        distance: '3158m',
      },
      busStation: {
        name: 'Bus station',
        distance: '450m',
      },
      bank: {
        name: 'Bank',
        distance: '415m',
      },
      hospital: {
        name: 'Hospital',
        distance: '350m',
      },
    },
  });

  mainSwiperConfig = signal<SwiperOptions>({
    spaceBetween: 0,
    navigation: true,
    thumbs: {
      swiper: '.thumb-swiper',
    },
    loop: false,
    grabCursor: true,
    effect: 'slide',
    speed: 600,
    autoplay: false,
  });
  thumbSwiperConfig = signal<SwiperOptions>({
    spaceBetween: 12,
    slidesPerView: 4,

    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
  planSwiperConfig = signal<SwiperOptions>({
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    effect: 'slide',
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  amenitiesSwiperConfig: SwiperOptions = {
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

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  getTransportItems() {
    const transport = this.locationData().transport;
    return [
      { key: 'coast', ...transport.coast },
      { key: 'university', ...transport.university },
      { key: 'supermarket', ...transport.supermarket },
      { key: 'park', ...transport.park },
      { key: 'railwayStation', ...transport.railwayStation },
      { key: 'airport', ...transport.airport },
      { key: 'busStation', ...transport.busStation },
      { key: 'bank', ...transport.bank },
      { key: 'hospital', ...transport.hospital },
    ];
  }

  getTransportPairs() {
    const items = this.getTransportItems();
    const pairs = [];

    for (let i = 0; i < items.length; i += 2) {
      pairs.push({
        left: items[i],
        right: items[i + 1] || null,
      });
    }

    return pairs;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  openVideoDialog(): void {
    this.displayVideo.set(true);
  }

  closeVideoDialog(): void {
    this.displayVideo.set(false);
  }
}
