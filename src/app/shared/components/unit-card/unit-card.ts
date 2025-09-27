import { Component, effect, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unit-card',
  imports: [RouterLink],
  templateUrl: './unit-card.html',
  styleUrl: './unit-card.scss',
})
export class UnitCard {
  unit = input.required<any>();

  // project = input({
  //   image: 'https://picsum.photos/id/1018/1000/400',
  //   title: 'Elegant Studio Flat',
  //   location: '102 Ingraham St, Brooklyn, NY 11237',
  //   beds: 3,
  //   baths: 3,
  //   sqft: 4043,
  //   price: '$8,600',
  //   badges: ['Featured', 'For Sale']
  // } as any);
}
