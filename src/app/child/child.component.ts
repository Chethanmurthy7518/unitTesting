import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class User{
  email:string;
  password:string;
  constructor(email:string,password:string){
    this.email= email;
    this.password= password;
  }
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()enabled:boolean;
  @Output()loggedIn = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(email,password){
    this.loggedIn.emit(new User(email,password))
  }

}
