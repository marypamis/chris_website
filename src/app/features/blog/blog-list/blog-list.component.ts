import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-blog-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
    posts$!: Observable<BlogPost[]>;

    constructor(private blogService: BlogService) { }

    ngOnInit() {
        this.posts$ = this.blogService.getPosts();
    }
}
