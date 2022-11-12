package com.Trip.TripSchedule.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer TRipID;
	
	String StartTime;
	String EndTime;
	String Start_Station;
	String End_station;	
	public Integer getTRipID() {
		return TRipID;
	}
	public void setTRipID(Integer tRipID) {
		TRipID = tRipID;
	}
	public String getStartTime() {
		return StartTime;
	}
	public void setStartTime(String startTime) {
		StartTime = startTime;
	}
	public String getEndTime() {
		return EndTime;
	}
	public void setEndTime(String endTime) {
		EndTime = endTime;
	}
	public String getStart_Station() {
		return Start_Station;
	}
	public void setStart_Station(String start_Station) {
		Start_Station = start_Station;
	}
	public String getEnd_station() {
		return End_station;
	}
	public void setEnd_station(String end_station) {
		End_station = end_station;
	}
	

}
