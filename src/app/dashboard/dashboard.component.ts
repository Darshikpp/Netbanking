import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 //deposite
  acno="";
  pswd="";
  amount="";
  //withdraw
  acno1=""
  pswd1=""
  amount1=""


//current properties

user="";
  

  
  //wuthdraw model
  withdrawForm= this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    
  })
  sdate: Date;

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router ) { 
    if(localStorage.getItem('currentUser')){
    this.user=JSON.parse(localStorage.getItem('currentUser')||'');
    }
    // this.user=this.ds.currentUser
    this.sdate=new Date()
  
    }

  depositForm= this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    
  })
   logout(){
    // alert("clicked  ")
    //remove currentAcno and currentUser from localstorage
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
   }
   delete(){
    // alert("clicked")
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'');
   }
   onCancel(){
    this.acno='';
   }
   onDelete(event:any){
  //  alert(event)
      this.ds.deleteAcc(event)
      .subscribe((result:any)=>{
      alert(result.message)
     // this.router.navigateByUrl('');
      this.logout()
  },
  result=>{   
    alert(result.error.message)
  }
  )
   }





  ngOnInit(): void {

    if(!localStorage.getItem('currentUser')){
      alert("please login first")
      this.router.navigateByUrl('')
    }
    // console.log(this.user);
   
  }

  deposit(){
  // alert('clicked')
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    if(this.depositForm.valid){
  this.ds.deposit(acno,pswd,amount)
  
  .subscribe((result:any)=>{
  alert(result.message)
  },
  result=>{
    alert(result.error.message);
    
})
  
  }}
  
  





  withdraw(){
    // alert('clicked')
    
    var acno=this.withdrawForm.value.acno;
    var pswd=this.withdrawForm.value.pswd;
    var amount=this.withdrawForm.value.amount;

    if(this.withdrawForm.valid){
      this.ds.withdraw(acno,pswd,amount)
      
      .subscribe((result:any)=>{
      alert(result.message)
      },
      result=>{
        alert(result.error.message)
        
    })
      
    }
  }
}