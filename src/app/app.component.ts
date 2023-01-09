import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'data-binding-assignment';

  quarters = ["Quarter 1","Quarter 2","Quarter 3","Quarter 4"];

  months = ["Apr","May","Jun"];

  selectedquarter = "Quarter 1";

  selectedmonth = "Apr";


    quarterchanged(){

      if  (this.selectedquarter  ==  "Qaurter 1"){
        this.months = ["Apr","May","Jun"];
        this.selectedmonth = "Apr";
      }
      else if  (this.selectedquarter  ==  "Qaurter 2"){
        this.months = ["Jul","Aug","Sep"];
        this.selectedmonth = "Jul";

      }
      else if  (this.selectedquarter  ==  "Qaurter 3"){
        this.months = ["Oct","Nov","Dec"];
        this.selectedmonth = "Oct";

      }
      else{
        this.months = ["Jan","Feb","Mar"];
        this.selectedmonth = "Jan";


      }

    }


}

