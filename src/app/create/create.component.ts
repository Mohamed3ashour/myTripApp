import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TripServiceService } from '../trip-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   
   homeTrip!: HomeComponent;
  startTime:string="";
  register(registerform: NgForm){
    this.TripService.registerTrip(registerform.value).subscribe(
      (resp) => {
        console.log(resp);
        registerform.reset();
        this.homeTrip.getTripDetails
      },
      (err) => {
        console.log(err);
      }
    );
  }

  constructor(private TripService:TripServiceService) { }

  ngOnInit(): void {
  }

}
