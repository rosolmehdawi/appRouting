import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {
  userForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',Validators.required),
    title:new FormControl(''),
    gender:new FormControl(''),
    phone:new FormControl(''),
    picture:new FormControl(''),
    dateOfBrith:new FormControl(''),
    registerDate:new FormControl(''),
   

  })

  constructor() { }

  ngOnInit(): void {
  }

onSubmit():void{
  console.log(this.userForm.value)
}

}
