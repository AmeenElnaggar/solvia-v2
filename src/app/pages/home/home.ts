import { Component } from '@angular/core';
import { SplashScreen } from '../../layout/splash-screen/splash-screen';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { ServicesComponent } from '../../shared/components/services/services.component';
import { SiteButtonComponent } from '../../shared/components/site-button/site-button.component';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { MainFilterComponent } from '../../shared/components/filters/main-filters';
import { Partners } from './partners/partners';
import { NewProjects } from './new-projects/new-projects';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Blogs } from './blogs/blogs';
import { ContactCta } from './contact-cta/contact-cta';
import { Categories } from './categories/categories';
import { UnitCard } from '../../shared/components/unit-card/unit-card';
import { FeaturedUnits } from './featured-units/featured-units';
import { Neighborhoods } from './neighborhoods/neighborhoods';

@Component({
  selector: 'app-home',
  imports: [
    SplashScreen,
    HeroSliderComponent,
    ServicesComponent,
    MainFilterComponent,
    FeaturedUnits,
    Partners,
    NewProjects,
    AnimateOnScroll,
    Blogs,
    ContactCta,
    Categories,
    UnitCard,
    Neighborhoods,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private className = 'home-active';

  ngOnInit() {
    document.body.classList.add(this.className);
  }

  ngOnDestroy() {
    document.body.classList.remove(this.className);
  }
}
