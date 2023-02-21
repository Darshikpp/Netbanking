import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//global http header object

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  currentUser="";

  currentAcno="";
  

 
  constructor(private http:HttpClient) { 
    // this.getDetails();
  }

//save details - to save data to the local storage

saveDetails(){
  if(this.userDetails){
  //database
  localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
  }
  if(this.currentUser){
  //current user
  localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  }
  if(this.currentAcno){
  //currentacno
  localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  }
}

// getDetails(){
//   if(localStorage.getItem('DataBase')){
//     this.userDetails = JSON.parse(localStorage.getItem('DataBase') || '')
//   }
//   if(localStorage.getItem('currentUser')){
//     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
//   }
//   if(localStorage.getItem('currentAcno')){
//     this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '')
//   }
// }


  //database
  userDetails:any = {
    1000:{acno:1000,username:"Amal",password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,username:"Amalu",password:1001,balance:1001,transaction:[]},
    1002:{acno:1002,username:"Amala",password:1002,balance:1002,transaction:[]},
  }





  
  register(acno:any,username:any,pswd:any){
     const data={
      acno,
      pswd,
      username, 
    }
 return this.http.post('http://localhost:3000/register',data)  
}


login(acno:any,pswd:any){

  const data={
    acno,
    pswd
  }

return this.http.post('http://localhost:3000/login',data)

}

getToken(){
  //fetch token from local storage
  const token = JSON.parse(localStorage.getItem('token')||'')
   //append token inside header
  let headers=new HttpHeaders()
if(token){
 options.headers=headers.append('x-access-token',token)
}
return options//to get token
}


deposit(acno:any,pswd:any,amt:any){
  const data={
    acno,
    pswd,
    amount:amt
  }

return this.http.post('http://localhost:3000/deposit',data,this.getToken())




//   let userDetails=this.userDetails;
//   var amount = parseInt(amt)

//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       userDetails[acno]['balance']+=amount;
//       userDetails[acno]['transaction'].push({
//         Type:"Credit",
//         Amount:amount
//       })
     
//       console.log(userDetails);
//       this.saveDetails();

//       return userDetails[acno]['balance']
//     }
//     else{
//       alert('Password missmatch')
//       return false;
//     }
//   }
//   else{
//     alert('Inavalid data')
//     return false;
//   }
}




  withdraw(acno:any,pswd:any,amt:any){
  const data={
    acno,
    pswd,
    amount:amt
  }

return this.http.post('http://localhost:3000/withdraw',data,this.getToken())

  
}

getTransaction(acno:any){
  const data={
    acno
  }
  return this.http.post('http://localhost:3000/transaction',data,this.getToken())
}


//delete
deleteAcc(acno:any){
  return this.http.delete("http://localhost:3000/deleteAcc/"+acno)
}
}