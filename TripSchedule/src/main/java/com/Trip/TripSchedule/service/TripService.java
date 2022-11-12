package com.Trip.TripSchedule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;	
import com.Trip.TripSchedule.model.Trip;
import com.Trip.TripSchedule.repository.TripRepository;

@Service
public class TripService {
	
	@Autowired
	private TripRepository triprepository;
	public Trip AddTrip(Trip trip)
	{
		return triprepository.save(trip);
	}
}
