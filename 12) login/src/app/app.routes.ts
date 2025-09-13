import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
// import { Services } from './pages/services/services';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/login/login';
import { Layout } from './components/layout/layout';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },//default route when application renders
    { path: 'login', component: Login },
       { path: '', component: Layout, children: [
           { path: 'home', component: Home },
           { path: 'about', component: About },
           { path: '**', component: NotFound }
       ]},

  
 
    
  

];
