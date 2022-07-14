import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import{List,UserPreview,UserFull} from 'src/model/users.model';
import{Post,PostPreview} from 'src/model/posts.model';

import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any=[];
  newUser:any=null;
  createUSER:any=[];
  userId:any=[];
  counter=0;
  name="";
  userDetails='/user-list';
  public usertoid=[{id:'ddd',name:'dd'}];
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getUser()
    this.users=this.getUser()
   

    
  }
  getUser(){
   
    this.userService.getListUsers().subscribe((res:any)=>{
     console.log(res)
     this.users=res.data;

     
      
   });
    
 }

 
getId(id:string){
 this.userService.getUsersId(id).subscribe(response=>{
    console.log(response);
    this.userId=response;

  })
}

createUser(id:string): void {
 if(this.newUser===null){
  this.counter++;
 this.userService.createUser({ firstName: `first`, lastName: 'last',email:`test777${this.counter}@test.com`})
  .subscribe(
      response => {console.log(response);
      
        this.users.push(response);
        // this.createUSER=response;
      
   
       } );
       
  
}
       

     
  
}

deleteUSER(id:string):void{
  this.userService.deleteUser(id).subscribe(response=>this.getUser());
}

updatToUser(userUpdate:UserPreview):void{
  this.userService.updateUser(userUpdate.id, { firstName: 'new name',lastName:'new name'}).subscribe(() => this.getUser())
}

getDetails(id:string):void{
  // this.router.navigate(['user-details'],{state:{data:this.getId}} );
  this.router.navigate([`/users/users-list/user-details`] ,{queryParams:{id:id}}) ;
  // users:this.getId(id)
}


goToUserForm(id:string):void{
  this.router.navigate([`/users/users-list/user-form/${id}`] ,{queryParams:{id:id}}) ;
}

}
