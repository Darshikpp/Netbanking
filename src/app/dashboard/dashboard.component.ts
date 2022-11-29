import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  

  constructor(private fb:FormBuilder, private ds:DataService) { 
  this.user=this.ds.currentUser

  }
  //wuthdraw model
  withdrawForm= this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    
  })

  depositForm= this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    
  })
  


  ngOnInit(): void {
   
  }

  deposit(){
  // alert('clicked')
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    if(this.depositForm.valid){


  const result=this.ds.deposit(acno, pswd, amount)
  if(result){
    alert(`${amount} is credited....available balance is${result}`)
  
  }else{
    alert('invalid form')
  }
  }

  }
  





  withdraw(){
    // alert('clicked')
    var acno=this.withdrawForm.value.acno;
    var pswd=this.withdrawForm.value.pswd;
    var amount=this.withdrawForm.value.amount;
    if(this.withdrawForm.valid){

  const result=this.ds.withdraw(acno,pswd,amount)
  if(result){
    alert(`${amount} is debited....available balance is${result}`)
  }
  }else{
    alert('invalid form')
  }
  
 

}




  // 



}