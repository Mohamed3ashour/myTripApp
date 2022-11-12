package com.Trip.TripSchedule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Trip.TripSchedule.model.Trip;

@Repository
public interface TripRepository extends CrudRepository<Trip,Integer> {
	

}
