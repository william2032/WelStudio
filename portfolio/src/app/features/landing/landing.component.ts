import { Component } from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {HeroSectionComponent} from './layouts/hero-section/hero-section.component';
import {ClientsSectionComponent} from './layouts/clients-section/clients-section.component';
import {ServicesSectionComponent} from './layouts/services-section/services-section.component';
import {TeamSectionComponent} from './layouts/team-section/team-section.component';
import {WorkSectionComponent} from './layouts/work-section/work-section.component';
import {TestimonialSectionComponent} from '../shared/testimonial-section/testimonial-section.component';
import {FooterComponent} from '../shared/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    ServicesSectionComponent,
    TeamSectionComponent,
    WorkSectionComponent,
    TestimonialSectionComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
