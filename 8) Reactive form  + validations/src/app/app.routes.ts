import { Routes } from '@angular/router';

import { User } from './components/user/user';

export const routes: Routes = [

    { path: '', redirectTo: 'user', pathMatch: 'full' },//default route when application renders
   
    { path: 'user', component: User },


];
