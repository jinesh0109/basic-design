import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-slots',
  templateUrl: './booking-slots.component.html',
  styleUrl: './booking-slots.component.css'
})
export class BookingSlotsComponent implements OnInit{

  @Input() intervalUnit: number = 60;
  startTime: string;
  endTime: string;
  timeSlots: string[] = [];

  constructor(){
    this.startTime = "10:00 AM";
    this.endTime = "07:00 PM"
  }
  ngOnInit(): void {
      this.timeSlots = this.giveTimeSlot(this.startTime, this.endTime, this.intervalUnit)
  }
  giveTimeSlot(startTime: string, endTime: string, intervalInMinutes: number): string[] {
    const timeSlots: string[] = [];
  
    // Get current date and time
    const currentDate = new Date();
  
    // Set the current date to the given start time
    const startDate = new Date(`${currentDate.toDateString()} ${startTime}`);
    const endDate = new Date(`${currentDate.toDateString()} ${endTime}`);
  
    // Iterate over time slots
    let currentTime = startDate;
    while (currentTime <= endDate) {
      // Format the current time in HH:mm AM/PM format
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
      // Add the formatted time to the timeSlots array
      timeSlots.push(formattedTime);
  
      // Move to the next time slot based on the interval
      currentTime.setMinutes(currentTime.getMinutes() + intervalInMinutes);
    }
    return timeSlots;

  }
}
