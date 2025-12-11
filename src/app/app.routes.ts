import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BioComponent } from './features/bio/bio.component';
import { PhotosComponent } from './features/photos/photos.component';
import { VideosComponent } from './features/videos/videos.component';
import { BlogListComponent } from './features/blog/blog-list/blog-list.component';
import { BlogPostComponent } from './features/blog/blog-post/blog-post.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Chris Portfolio | Home' },
    { path: 'bio', component: BioComponent, title: 'Chris Portfolio | Bio' },
    { path: 'photos', component: PhotosComponent, title: 'Chris Portfolio | Photos' },
    { path: 'videos', component: VideosComponent, title: 'Chris Portfolio | Videos' },
    { path: 'blog', component: BlogListComponent, title: 'Chris Portfolio | Blog' },
    { path: 'blog/:id', component: BlogPostComponent, title: 'Chris Portfolio | Post' },
    { path: 'contact', component: ContactComponent, title: 'Chris Portfolio | Contact' },
    { path: '**', redirectTo: '' }
];
