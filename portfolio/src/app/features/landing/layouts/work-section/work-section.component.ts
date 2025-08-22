import {Component, signal} from '@angular/core';


interface WorkProject {
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

@Component({
  selector: 'app-work-section',
  imports: [],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss'
})
export class WorkSectionComponent {
  projects = signal<WorkProject[]>([
    {
      title: 'Sendit',
      category: 'UI/UX',
      description: 'Modern delivery app design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-red-400 to-red-500'
    },
    {
      title: 'Cookie Me',
      category: 'Web / app Development',
      description: 'E-commerce platform for cookies',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-green-400 to-green-500'
    },
    {
      title: 'ADOC',
      category: 'UI/UX Design',
      description: 'Medical appointment app',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Booking.com',
      category: 'UI/UX Design',
      description: 'Travel booking platform',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Homely',
      category: 'UI/UX Design',
      description: 'Home rental application',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80',
      color: 'from-yellow-400 to-orange-500'
    }
  ]);
}
