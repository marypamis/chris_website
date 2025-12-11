import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LightboxImage {
    url: string;
    caption?: string;
}

@Component({
    selector: 'app-lightbox',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
    @Input() isOpen = false;
    @Input() currentImage: LightboxImage | null = null;
    @Input() hasNext = false;
    @Input() hasPrev = false;

    @Output() close = new EventEmitter<void>();
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    @HostListener('document:keydown.escape')
    onEscape() {
        this.close.emit();
    }

    @HostListener('document:keydown.arrowright')
    onRight() {
        if (this.hasNext) this.next.emit();
    }

    @HostListener('document:keydown.arrowleft')
    onLeft() {
        if (this.hasPrev) this.prev.emit();
    }
}
