import { Routes } from '@angular/router';

// import { Services } from './pages/services/services';

import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },//default route when application renders
    { path: 'login', component: Login },
       { path: '', component: Layout, children: [
        { path: 'dashboard', component: Dashboard },
        
       ]},

  
 
    
  

];
