import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { UserFull, UserPreview } from 'src/model/users.model';
import { UserService } from 'src/services/user.service';
import { UsersListComponent } from '../users-list/users-list.component';
// import {users} from '../users-list/users-list.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 users:any=[];
 details:any=[];
 showdata=false;
 userId: any=[];

  constructor(private router:Router, private activatedRoute:ActivatedRoute,private userService:UserService ) {
 
   }
 

  
id='';
ngOnInit() {
// this.getData()
this.activatedRoute.queryParamMap.subscribe((params)=>{
  this.id=params.get('id') ||'';
})
  
  }

  getData():void{
    
    this.activatedRoute.queryParamMap.subscribe((params)=>{
      this.id=params.get('id') ||'';
     
    console.log(this.id)
     this.userService.getUsersId(this.id).subscribe(response=>{
       this.users=response;
       this.showdata=true;
     })
      
   
      
     })
  }
 

    getDetails(id:string):void{
      
      // this.router.navigate(['user-details'],{state:{data:this.getId}} );
      this.router.navigate([`/users/users-list/user-details`] , {queryParams:{id:this.id}}) ;
      // users:this.getId(id)
    }

    getPost(id:string):void{
      // this.router.navigate(['user-details'],{state:{data:this.getId}} );
      this.router.navigate([`/users/users-list/user-details/posts`] ,{queryParams:{id:this.id}}) ;
      // users:this.getId(id)
    }



  onBack(): void {
    this.router.navigate(['users-list']);
 }

 gotToPosts(): void {
  this.router.navigate([`users/users-list/user-details/posts`,],{queryParams:{id:this.id}});
}


 

}
