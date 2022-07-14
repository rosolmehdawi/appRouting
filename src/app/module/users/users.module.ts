import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersListComponent,
  
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
