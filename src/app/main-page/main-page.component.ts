import { Component, OnInit } from '@angular/core';
import { BoredapiService } from '../boredapi.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  boredData: any;
  constructor(private apiService: BoredapiService) { }
  
  ngOnInit(): void {
    this.getActivity();
  }


  getActivity():void {
    this.apiService.get().subscribe(
      res => {
       this.boredData=res;
       console.log(this.boredData);
      },
      error => {
        console.log(error);
      }
    );
  }
  
}
