import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    tags: string[];
}

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private posts: BlogPost[] = [
        {
            id: 1,
            title: 'Getting Started with Angular 17',
            excerpt: 'Angular 17 introduces a new look and feel, and many developer experience improvements.',
            content: '<p>Angular 17 is a major release that brings a lot of excitement...</p><p>We have new control flow syntax, deferred loading, and more.</p>',
            date: 'December 10, 2024',
            tags: ['Angular', 'Frontend']
        },
        {
            id: 2,
            title: 'The Art of Minimalist Web Design',
            excerpt: 'How to create stunning user interfaces with less clutter and more impact.',
            content: '<p>Minimalism is not just about having less...</p><p>It is about highlighting what matters most.</p>',
            date: 'November 28, 2024',
            tags: ['Design', 'UX']
        },
        {
            id: 3,
            title: 'Why TypeScript is Essential',
            excerpt: 'Exploring the benefits of static typing in modern web development.',
            content: '<p>TypeScript has become the industry standard...</p>',
            date: 'November 15, 2024',
            tags: ['TypeScript', 'Coding']
        }
    ];

    getPosts(): Observable<BlogPost[]> {
        return of(this.posts);
    }

    getPost(id: number): Observable<BlogPost | undefined> {
        return of(this.posts.find(p => p.id === id));
    }
}
