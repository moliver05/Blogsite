import { PhotolioComponent } from './photolio/photolio.component';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
const appRoutes: Routes = [
    {
        path: '',
        component: StoryFeedComponent
    },
    {
        path: 'album',
        component: PhotolioComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
