import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { AchievementsComponent } from './pages/achievements/achievements';
import { InterestsComponent } from './pages/interests/interests';
import { PhotosComponent } from './pages/photos/photos';
import { VideosComponent } from './pages/videos/videos';
import { TutoringComponent } from './pages/tutoring/tutoring';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Chris Rohan | Home' },
    { path: 'about', component: AboutComponent, title: 'About Chris' },
    { path: 'achievements', component: AchievementsComponent, title: 'Achievements' },
    { path: 'interests', component: InterestsComponent, title: 'Interests' },
    { path: 'photos', component: PhotosComponent, title: 'Photos' },
    { path: 'videos', component: VideosComponent, title: 'Videos' },
    { path: 'tutoring', component: TutoringComponent, title: 'Math Tutoring' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: '**', redirectTo: '' }
];
