import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  enabled = true;


  constructor() { }
  email:string;
  password:string;
  ngOnInit(): void {
  }

  login(data){
    this.email=data.email;
    this.password = data.password;
  }

}
