import { Component, OnInit } from '@angular/core';
import { TripServiceService } from '../trip-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tripDetails:any=null;

  constructor(private TripService:TripServiceService) { 
    this.getTripDetails()
  }

  getTripDetails(){
    this.TripService.gitTrip().subscribe(
      (resp) => {
        console.log(resp);
        this.tripDetails=resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  ngOnInit(): void {
  }

}
