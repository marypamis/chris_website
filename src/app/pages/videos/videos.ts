import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrl: './videos.scss',
})
export class VideosComponent {
  videos = [
    {
      src: '/assets/rohi.mp4',
      title: 'Chris in Action',
      description: 'A video showcasing my skills and projects.'
    },
    {
      src: '/assets/demo.mp4',
      title: 'Math / Coding Demo',
      description: 'Demonstrating problem-solving techniques.'
    }
  ];
}
