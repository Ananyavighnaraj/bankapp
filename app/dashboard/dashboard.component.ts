import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
acno=''
psw=''
amnt=''

constructor(private ds:DataService){}

deposit(){
  var acno=this.acno
  var psw=this.psw
  var amnt=this.amnt
  
  const result=this.ds.deposit(acno,psw,amnt)

  if(result){
    alert(`${amnt} credited  to your acc and the balance is ${result}`)
  }
  else{
    alert('incorrect accno or password')
  }

}
withdraw(){

}

}
