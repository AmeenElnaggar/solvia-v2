import { Component, signal, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ServicesComponent {
  activeTab = signal<'Buying' | 'Rating' | 'Selling'>('Buying');

  setActive(tab: 'Buying' | 'Rating' | 'Selling') {
    this.activeTab.set(tab);
  }
}
