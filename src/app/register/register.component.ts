import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  uname="";
  acno="";
  pswd="";

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) {
   
  
  }//registration model
  registerForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  //control pass to ts to tml file
  ngOnInit(): void {
  }
  // register clicked 
   register(){
    console.log(this.registerForm);//valid or not
    
     var uname=this.registerForm.value.uname;
     var acno=this.registerForm.value.acno;
     var pswd=this.registerForm.value.pswd;
     if(this.registerForm.valid){

      // console.log(this.registerForm.get('uname')?.errors);
      this.ds.register(acno,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
        
  },
    result=>{
      alert(result.error.message)
    })
  }
 
   }
  }
