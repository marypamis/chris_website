import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxComponent, LightboxImage } from '../../shared/components/lightbox/lightbox.component';

@Component({
    selector: 'app-photos',
    standalone: true,
    imports: [CommonModule, LightboxComponent],
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
    photos: LightboxImage[] = [
        { url: 'https://picsum.photos/id/101/800/600', caption: 'Mountain View' },
        { url: 'https://picsum.photos/id/102/800/600', caption: 'Summer Vibes' },
        { url: 'https://picsum.photos/id/103/800/600', caption: 'City Lights' },
        { url: 'https://picsum.photos/id/104/800/600', caption: 'Creative Space' },
        { url: 'https://picsum.photos/id/106/800/600', caption: 'Nature Walk' },
        { url: 'https://picsum.photos/id/108/800/600', caption: 'Urban Architecture' },
        { url: 'https://picsum.photos/id/109/800/600', caption: 'Morning Coffee' },
        { url: 'https://picsum.photos/id/110/800/600', caption: 'Coding Setup' },
    ];

    isLightboxOpen = false;
    currentIndex = 0;

    get currentImage(): LightboxImage {
        return this.photos[this.currentIndex];
    }

    openLightbox(index: number) {
        this.currentIndex = index;
        this.isLightboxOpen = true;
    }

    closeLightbox() {
        this.isLightboxOpen = false;
    }

    nextImage() {
        if (this.currentIndex < this.photos.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop
        }
    }

    prevImage() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.photos.length - 1; // Loop
        }
    }
}
