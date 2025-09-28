import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Neighborhood {
  image: string;
  title: string;
  properties: string;
  num: number;
}

@Component({
  selector: 'app-neighborhoods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neighborhoods.html',
  styleUrl: './neighborhoods.scss',
})
export class Neighborhoods {
  neighborhoods: Neighborhood[] = [
    {
      image: 'https://picsum.photos/seed/newyork1/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
    {
      image: 'https://picsum.photos/seed/newyork2/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
    {
      image: 'https://picsum.photos/seed/newyork3/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
    {
      image: 'https://picsum.photos/seed/newyork4/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
    {
      image: 'https://picsum.photos/seed/newyork5/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
    {
      image: 'https://picsum.photos/seed/newyork6/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
    {
      image: 'https://picsum.photos/seed/newyork7/800/600',
      title: 'New York',
      properties: 'Properties',
      num: 2491,
    },
  ];
}
