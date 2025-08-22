import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-testimonial-section',
  imports: [CommonModule],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {
  allTestimonials = signal<Testimonial[]>([
    {
      name: 'Smail yefssah',
      role: 'CEO',
      company: 'Unique Parcel Services',
      content: 'Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'Dr Edna',
      role: 'Lecturer',
      company: 'Chuka University',
      content: 'Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'Michael Johnson',
      role: 'CTO',
      company: 'TechStart Inc',
      content: 'Outstanding work quality and professional approach. The team delivered beyond our expectations and helped us achieve our digital transformation goals.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      company: 'Innovation Labs',
      content: 'Exceptional creativity and technical expertise. They transformed our vision into a stunning digital product that our users absolutely love.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    }
  ]);

  currentIndex = signal(0);

  testimonials = () => {
    const current = this.currentIndex();
    const all = this.allTestimonials();
    return [
      all[current],
      all[(current + 1) % all.length]
    ];
  };

  nextTestimonial() {
    const current = this.currentIndex();
    const next = (current + 2) % this.allTestimonials().length;
    this.currentIndex.set(next);
  }

  previousTestimonial() {
    const current = this.currentIndex();
    const all = this.allTestimonials();
    const prev = current === 0 ? all.length - 2 : current - 2;
    this.currentIndex.set(Math.max(0, prev));
  }
}
