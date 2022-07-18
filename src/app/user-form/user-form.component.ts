import { Component, Input, OnInit } from '@angular/core';
import { CreateUserModel, UserFull, UserPreview } from 'src/model/users.model';
import {Location} from '@angular/common';
import { UserService } from 'src/services/user.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 createUSER=false;
 updeateUser=false;
  id:any; 
  handelSuccess=false;
  handelError=false;
  newUser:any=null;
  users:any=[];
  userId: any=[];
  
 genders:string[]=['Female','Male'];
 titles:string[]=["Mr", "Ms", "Mrs", "Miss", "Dr",""];
 email:string='';
  model:UserFull={
    firstName:this.users.firstName, 
    lastName: this.users.lastName, 
    email: this.users.email, 
    id: this.users.id, 
    title: this.users.title, 
    gender:this.users.gender,
    dateOfBirth: this.users.dateOfBirth, 
    registerDate: this.users.registerDate, 
    phone:this.users.phone, 
    picture:this.users.picture
  }

 

  constructor(private location:Location,private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      

      this.id=params.get('id') || '';
      if(this.id != ''){
        this.updeateUser=true;
        this.getId(this.id);
       

    
       
      }else if(this.id ==''){
        this.createUSER=true;
      
       
        
      }
    })

  }
  getcreateUpdate(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      

      this.id=params.get('id') || '';
      if(this.id != ''){

        this.updatToUser();
       
      }else if(this.id ==''){
   
        this.createUser()
       
        
      }
    })
  }

  getId(id:string){
    this.userService.getUsersId(id).subscribe(response=>{
      console.log(response);
      this.userId=response;
  
    })
  }
  

  getUser(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      

      this.id=params.get('id') || '';
      console.log(this.id )
     this.userService.getUsersId(this.id).subscribe(response=>{
       this.users=response;
     })
      
 
      
     })
 }



  createUser():void{
 
        this.userService.createUser({
          firstName:this.model.firstName,
          lastName:this.model.lastName,
          email:this.model.email
        }).subscribe(
          response=>{
    
          console.log(response);
          this.handelSuccess=true;
          this.handelError=false;    
        
    
          console.log("create user successfully");
          this.users.push(response.values);
          
          
        
          setTimeout(()=>{
          this.router.navigate(['/users/users-list'])
 },2000)
          
            },
            (error) =>{ console.log('something missing!!', error)
            this.handelError=true
          this.handelSuccess=false}
      
 ) 
      

    
      
     
    

   
  }

  updatToUser():void{
    // this.updeateUser=true;

    this.userService.updateUser(this.id, 
      { firstName:this.model.firstName, 
        lastName:this.model.lastName, 
        email:this.model.email,
        // id: this.model.id,
        title:this.model.title,
        gender: this.model.gender,
        dateOfBirth: this.model.dateOfBirth,
        registerDate: this.model.registerDate,
        phone: this.model.phone,
        picture: this.model.picture})
        
        .subscribe((response) =>{ 
        console.log(response);
          this.handelSuccess=true;
          this.handelError=false;    
          console.log("update user successfully");
        
  
          
        // this.getId(this.id);
        setTimeout(()=>{
          this.router.navigate(['/users/users-list'])
 },2000)
       
      },
       (error) =>{ console.log('something missing!!', error)
      this.handelError=true
    this.handelSuccess=false}
    )
        
  }
  

  

  back():void{
    // this.location.back();
    this.router.navigate(['/users/users-list'])

  }

}
