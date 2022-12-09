import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
aim="YOUR PERFECT BANKING PARTNER"
  data="enter acc number"
  acno=''
  psw=''

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},     //here 1000 is account number
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0}
  }

 constructor(private router:Router){}
 

login(){   //  for method 1.2.2
  var acno=this.acno
  var psw=this.psw
  var userDetails=this.userDetails

  if(acno in userDetails){
    if(psw==userDetails[acno]["password"]){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert('incorrect password')
  }
}
  else{
    alert('incorrect username')
  }
 // alert('login clicked')
}
}

// login(a:any,b:any){     //for method 1.2.3   provide any name for arguments as that is passed on html 
//   this.acno=a.value
//   this.psw=b.value    //these 2 lines to call a and b for 1.2.3  acno and psw are initialised at start

//   var acno=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails

//   if(acno in userDetails){
//     if(psw==userDetails[acno]["password"]){
//     alert('login success')
//   }
//   else{
//     alert('incorrect password')
//   }
// }
//   else{
//     alert('incorrect username')
//   }
// }
// }

// acnoChange(event:any){    //for $event
// this.acno=event.target.value
// console.log(this.acno);
// }

// pswChange(event:any){
// this.psw=event.target.value
// console.log(this.psw);
// }




