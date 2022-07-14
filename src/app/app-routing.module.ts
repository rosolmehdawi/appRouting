import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsersGuard } from './guards/users.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersListComponent } from './module/users/users-list/users-list.component';
import { UserDetailsComponent } from './module/users/user-details/user-details.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { title:'Home',path:'homepage-Component',component:HomepageComponent},
  { title:'About Us',path:'about-us',component:AboutUsComponent},

  {
    title:'Users List',
    path:'users',
    loadChildren:()=>import('./module/users/users.module').then(module=>module.UsersModule),
    canActivate: [UsersGuard]
  },
  {path:'',redirectTo:'homepage-Component' , pathMatch:'full'},

  {path:'**',component:PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
