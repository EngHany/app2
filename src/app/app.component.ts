import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

//import { AppRoutingModule } from "./app-routing.module";
import { Router } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('goals',[
      transition('*=>*',[
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor ( private ss :Router){

  }

  goals = ['firat goal','second goal','third goal'];
  btnTit: string = "Adddddd";
  addItemTxt: string = "hany goall";
  title = "hany salah title";
  count: number;
  ngOnInit() {
    this.count = this.goals.length;
  }
  clickme() {
    this.goals.push(this.addItemTxt);
    this.addItemTxt="";
    this.count=this.goals.length;
    console.log(this.goals);
    
  }
  remove(i){
this.goals.splice(1,i);

  }

}

