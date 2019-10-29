import { Component } from '@angular/core';
import dataJson from './JsonFile1572321218295.json';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data: any = dataJson;
  dataFiltered: any;

  constructor() {
  }

  ngOnInit() {
    this.getData('car');
  }

  getData(text: string) {
    let objArray = [];

    for(let i = 1; i < this.data.length; i++) {
      objArray[i - 1] = {};
      for(let k = 0; k < this.data[0].length && this.data[i].length; k++) {
        let key = this.data[0][k];
        objArray[i - 1][key] = this.data[i][k];
      }
    }
    //console.log(objArray);
  }

}
