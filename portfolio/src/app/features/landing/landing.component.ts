import { Component } from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {HeroSectionComponent} from './layouts/hero-section/hero-section.component';
import {ClientsSectionComponent} from './layouts/clients-section/clients-section.component';
import {ServicesSectionComponent} from './layouts/services-section/services-section.component';

@Component({
  selector: 'app-landing',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    ServicesSectionComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
