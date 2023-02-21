

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

acno="";
pswd="";




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
   
    this.pswd=event.target.value;
    console.log(this.pswd);
    
    
  }




  login(){

   
    
    //alert login clicked
     
    //  var userDetails=this.ds.userDetails;
      if(this.loginForm.valid){
        var acno=this.loginForm.value.acno;//1000
        var pswd=this.loginForm.value.pswd;//1000
    this.ds.login(acno,pswd)
      .subscribe((result:any)=>{
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
      localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
      localStorage.setItem('token',JSON.stringify(result.token))
      alert(result.message);
      this.router.navigateByUrl('dashboard')
   },
  result=>{
  alert(result.error.message)
 }
)
}
}
}





