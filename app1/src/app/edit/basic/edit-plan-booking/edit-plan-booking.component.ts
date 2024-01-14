import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-plan-booking',
  templateUrl: './edit-plan-booking.component.html',
  styleUrls: ['./edit-plan-booking.component.css']
})
export class EditPlanBookingComponent implements OnInit{
  durationList = [15,30,45]
  bufferList = [15,30,45]

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {}

  addDuration(duration:number){

  }
  addBuffer(buffer:number){

  }
  onNext() {
    this.router.navigate(['../price'], {
      relativeTo: this.route
    })
  }

  onSaveAndExit() {
    this.router.navigate(['../../../../settings/plans'], {
      relativeTo: this.route
    })
  }

  onBack() {
    this.router.navigate(["../intro"], {
      relativeTo: this.route
    })
  }
}
