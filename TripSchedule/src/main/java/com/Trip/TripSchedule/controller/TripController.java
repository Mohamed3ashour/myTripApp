package com.Trip.TripSchedule.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.Trip.TripSchedule.model.Trip;
import com.Trip.TripSchedule.service.TripService;

@RestController
public class TripController {
	
	@Autowired
	private TripService tripservice;
	
	@PostMapping("/addtrip")
	public Trip AddTrip(@RequestBody Trip trip)
	{
		return tripservice.AddTrip(trip);
		
	}

}
