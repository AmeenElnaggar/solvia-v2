import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointService } from '../../shared/services/breakpoint.service';
import { DrawerModule } from 'primeng/drawer';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { TranslocoService } from '@jsverse/transloco';
import { StickyHeaderDirective } from '../../shared/directives/sticky-header.directive';

@Component({
  selector: 'app-header',
  imports: [
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    DrawerModule,
    DynamicDialogModule,
    StickyHeaderDirective,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {
  #breakpoint = inject(BreakpointService);
  #dialog = inject(DialogService);
  #translate = inject(TranslocoService);

  isLgScreen = this.#breakpoint.isLgScreen;
  isMdScreen = this.#breakpoint.isMdScreen;
  isSidenavOpen = signal<boolean>(false);

  items = signal([
    { label: 'Home', url: 'home' },
    { label: 'Projects', url: '/projects' },
    { label: 'About Us', url: '/about' },
    { label: 'Careers', url: '/careers' },
    { label: 'News', url: '/news' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Media', url: '/media' },
  ]);

  onMenuIconClick(): void {
    if (!this.isLgScreen()) {
      // Toggle sidenav on small screens
      this.isSidenavOpen.set(!this.isSidenavOpen());
    }
  }

  openContactDialog(): void {
    this.#dialog.open(ContactFormComponent, {
      width: this.isLgScreen() ? '40vw' : '90vw',
      modal: true,
      dismissableMask: true,
      showHeader: false,
    });
    // Close sidenav if open
    if (!this.isLgScreen()) {
      this.isSidenavOpen.set(false);
    }
  }

  onHideSidenav() {
    this.isSidenavOpen.set(!this.isSidenavOpen());
  }
}
