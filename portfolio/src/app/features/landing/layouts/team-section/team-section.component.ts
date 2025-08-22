import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';


interface TeamMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-team-section',
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {
  teamMembers = signal<TeamMember[]>([
    {
      name: 'Kivindu William',
      role: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'Leah Achieng',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'Elvis Ndirangu',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    }
  ]);

  currentMemberIndex = signal(0);

  currentMember = () => this.teamMembers()[this.currentMemberIndex()];

  dots = signal(Array(64).fill(0)); // 8x8 grid of dots

  nextMember() {
    const current = this.currentMemberIndex();
    const next = current === this.teamMembers().length - 1 ? 0 : current + 1;
    this.currentMemberIndex.set(next);
  }

  previousMember() {
    const current = this.currentMemberIndex();
    const prev = current === 0 ? this.teamMembers().length - 1 : current - 1;
    this.currentMemberIndex.set(prev);
  }
}
