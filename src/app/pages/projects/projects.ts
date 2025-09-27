import { Component } from '@angular/core';
import { MainFilterComponent } from '../../shared/components/filters/main-filters';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { DataViewComponent } from '../../shared/components/data-view/data-view';

@Component({
  selector: 'app-projects',
  imports: [MainFilterComponent, ProjectCard, DataViewComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Minimalist Living Room',
      price: 4500000,
      location: 'Central London, UK',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      features: { beds: 3, baths: 2, area: '1200 Sqft' },
    },
    {
      title: 'Modern Apartment',
      price: 2200000,
      location: 'Berlin, Germany',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      features: { beds: 2, baths: 1, area: '850 Sqft' },
    },
    {
      title: 'Luxury Villa',
      price: 7500000,
      location: 'Dubai, UAE',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      features: { beds: 5, baths: 4, area: '3500 Sqft' },
    },
    {
      title: 'Cozy Cottage',
      price: 1200000,
      location: 'Provence, France',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      features: { beds: 2, baths: 1, area: '950 Sqft' },
    },
    {
      title: 'Eco-Friendly Home Building Guide',
      price: 6400000,
      location: 'Malibu, USA',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      features: { beds: 4, baths: 3, area: '2800 Sqft' },
    },
    {
      title: 'Minimalist Living Room',
      price: 4500000,
      location: 'Central London, UK',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      features: { beds: 3, baths: 2, area: '1200 Sqft' },
    },
    {
      title: 'Modern Apartment',
      price: 2200000,
      location: 'Berlin, Germany',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      features: { beds: 2, baths: 1, area: '850 Sqft' },
    },
    {
      title: 'Luxury Villa',
      price: 7500000,
      location: 'Dubai, UAE',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      features: { beds: 5, baths: 4, area: '3500 Sqft' },
    },
    {
      title: 'Cozy Cottage',
      price: 1200000,
      location: 'Provence, France',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      features: { beds: 2, baths: 1, area: '950 Sqft' },
    },
  ];
}
