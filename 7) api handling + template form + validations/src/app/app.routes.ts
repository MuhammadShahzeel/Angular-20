import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { NotFound } from './pages/not-found/not-found';
import { Photos } from './pages/photos/photos';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },//default route when application renders
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'services', component: Services }, 
    //if no route is matched always put in end
    { path: 'photos', component: Photos },
    { path: '**', component: NotFound }

];
