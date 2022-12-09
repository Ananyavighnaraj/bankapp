import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
uname=''
acno=''
psw=''
constructor(private ds:DataService){

}

register(){
  var uname=this.uname
  var acno=this.acno
  var psw=this.psw

  const result=this.ds.register(acno,uname,psw)  //to store the returned value const result is used
  if(result){
    alert('registration success')
  }
  else{
    alert('user already exist')
  }
}

}
