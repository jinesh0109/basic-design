import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-plan-scheduling-interval',
  templateUrl: './edit-plan-scheduling-interval.component.html',
  styleUrls: ['./edit-plan-scheduling-interval.component.css']
})
export class EditPlanSchedulingIntervalComponent {
  schedulingIntervalList = [15,30,45]
  duration = 30
  buffer = 30
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {}

  addSchedulingInterval(schedulingInterval:number){

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
