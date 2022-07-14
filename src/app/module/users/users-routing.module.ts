import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersGuard } from 'src/app/guards/users.guard';
import { PostsComponent } from 'src/app/posts/posts.component';
import { UserFormComponent } from 'src/app/user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
 {path:'users-list',component:UsersListComponent ,
},
{path:'users-list/user-details' ,component:UserDetailsComponent,},



{path:'users-list/user-details/posts' ,component:PostsComponent, canActivate: [UsersGuard]},


  {path:'users-list/user-form', component:UserFormComponent   },
  {path:"users-list/user-form/:id", component: UserFormComponent,
  
},



// {path:'posts/:id' ,component:PostsComponent},

  {path:'',redirectTo:'users-list' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
