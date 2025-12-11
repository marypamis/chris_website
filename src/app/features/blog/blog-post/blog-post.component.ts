import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';
import { Observable, switchMap } from 'rxjs';

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
    post$!: Observable<BlogPost | undefined>;

    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.post$ = this.route.paramMap.pipe(
            switchMap(params => {
                const id = Number(params.get('id'));
                return this.blogService.getPost(id);
            })
        );
    }
}
