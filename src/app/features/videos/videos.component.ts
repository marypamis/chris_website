import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl',
    standalone: true
})
export class SafeUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
    selector: 'app-videos',
    standalone: true,
    imports: [CommonModule, SafeUrlPipe],
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
    videos = [
        {
            title: 'Project Demo 2024',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
            description: 'A showcase of my latest development work.'
        },
        {
            title: 'Design Process Time-lapse',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: 'Behind the scenes of creating a modern UI.'
        }
    ];
}
