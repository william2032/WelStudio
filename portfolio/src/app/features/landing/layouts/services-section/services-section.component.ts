import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


interface Service {
  title: string;
  description: string;
  color: string;
  icon: string;
  linkText: string;
}

@Component({
  selector: 'app-services-section',
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      title: 'UI/UX Design, Web Design',
      description: 'Making your product clean and easy to use! The most important thing for us',
      color: 'bg-blue-500',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"/>`,
      linkText: 'Learn More'
    },
    {
      title: 'Web Development',
      description: 'Our Team will use the top technologies to developp your product',
      color: 'bg-green-500',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
      linkText: 'Learn More'
    },
    {
      title: 'Graphic Design',
      description: 'Crafting stunning visuals, branding assets and creative content that capture attention.',
      color: 'bg-purple-500',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>`,
      linkText: 'Learn More'
    },
    {
      title: 'Web Hosting/ Maintenance',
      description: 'Reliable, secure hosting, backups, and 24/7 monitoring to keep your site fast and online.',
      color: 'bg-orange-500',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>`,
      linkText: 'Learn More'
    }
  ];

  trackByTitle(index: number, service: Service): string {
    return service.title;
  }
}
