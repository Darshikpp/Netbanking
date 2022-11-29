
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// class collection of properties and function
//properties/variables
//functions/methods->user defined functions

aim="your perfect banking partner"


account="enter your account number"

acno=""
pswd=""




  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) {
    
  }
  //registration model
  loginForm= this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

//it automatically invokes when the object is created
//object initialization

  ngOnInit(): void {
  }

  

  acnoChange(event:any)
  {
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    
    
  }

  pswdChange(event:any)
  {
    console.log(event);
    this.pswd=event.target.value;
    console.log(this.pswd);
    
    
  }




  login(){

    console.log(this.loginForm);
    
    //alert login clicked
     var acno=this.loginForm.value.acno;
     var pswd=this.loginForm.value.pswd;
     
     if(this.loginForm.valid){
      
    const result=this.ds.login(acno,pswd)
if(result){
  alert('login successfull')
  this.router.navigateByUrl('dashboard')
}
else{
  alert('login failed')
}
 }else{
  alert('invalid form')
 }
}
}










  //its a life cycle hooks of angular
  //when the comment is created at same time it will initialize or authorized

// login(){
//   // alert("login clicked")
//    var acno=this.acno;
//    var pswd=this.pswd;
//    var userDetails=this.ds.userDetails;

//    if(acno in userDetails){
//     if(pswd == userDetails[acno]['password'])
//     {
//       alert('login successfull');
//       this.router.navigateByUrl('dashboard')
//     }
//     else{
//       alert('invalid password')
//     }
//   }
//    else{
//     alert('invalid user details')
//    }
  


