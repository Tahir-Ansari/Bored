import { Component } from '@angular/core';
import { BoredapiService } from '../boredapi.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  boredData: any;
  constructor(private apiService: BoredapiService) { }


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
