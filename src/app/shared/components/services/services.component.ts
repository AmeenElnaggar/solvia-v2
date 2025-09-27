import { Component, OnInit, signal, computed } from '@angular/core';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  cssClass: string;
  iconClass: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private servicesData = signal<ServiceItem[]>([
    {
      id: 1,
      title: 'Buy Property',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-home',
      cssClass: 'service-light',
      iconClass: 'icon-light',
    },
    {
      id: 2,
      title: 'Sell Property',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-shield-alt',
      cssClass: 'service-dark',
      iconClass: 'icon-dark',
    },
    {
      id: 3,
      title: 'Investment Advice',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-dollar-sign',
      cssClass: 'service-light',
      iconClass: 'icon-light',
    },
    {
      id: 4,
      title: 'Rental Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-building',
      cssClass: 'service-accent',
      iconClass: 'icon-accent',
    },
  ]);

  services = computed(() => this.servicesData());
}
