import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  imports: [CommonModule],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class PhotosComponent {
  photos = [
    { src: '/assets/IMG_1037.jpeg', caption: 'Chris Rohan', position: 'top' },
    { src: '/assets/IMG_1335.jpeg', caption: 'Gallery Image', position: 'center' },
    { src: '/assets/IMG_3111.jpeg', caption: 'Gallery Image', position: 'top' }
  ];
}
