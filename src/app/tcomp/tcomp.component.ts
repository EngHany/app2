import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-tcomp',
  templateUrl: './tcomp.component.html',
  styleUrls: ['./tcomp.component.css']
})
export class TcompComponent implements OnInit {
  public Ts:Array<object>=[];

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    console.log("wagih2");
    this.getTs();
  }
public getTs(){
  this.apiservice.getTs().subscribe((data:Array<object>)=>{
    this.Ts=data;
     console.log(data);
  });
}

}
