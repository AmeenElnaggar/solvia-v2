import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, InputText, ButtonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = signal(new Date().getFullYear());
  email = signal('');

  // Collapse states for mobile
  companyExpanded = signal(false);
  quickLinksExpanded = signal(false);

  companyLinks = [
    { label: 'Property For Sale', route: '/properties/sale' },
    { label: 'Property For Rent', route: '/properties/rent' },
    { label: 'Property For Buy', route: '/properties/buy' },
    { label: 'All Properties', route: '/properties' },
    { label: 'Our Agents', route: '/agents' },
  ];

  quickLinks = [
    { label: 'About Us', route: '/about' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'Latest News', route: '/news' },
    { label: 'Careers', route: '/careers' },
    { label: 'Media', route: '/media' },
  ];

  socialLinks = [
    { icon: 'pi pi-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'pi pi-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'pi pi-youtube', url: 'https://youtube.com', label: 'YouTube' },
  ];

  toggleCompany() {
    this.companyExpanded.set(!this.companyExpanded());
  }

  toggleQuickLinks() {
    this.quickLinksExpanded.set(!this.quickLinksExpanded());
  }

  onSubscribe() {
    if (this.email()) {
      console.log('Subscribing email:', this.email());
      this.email.set('');
    }
  }
}
