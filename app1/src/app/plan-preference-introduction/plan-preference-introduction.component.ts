import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plan-preference-introduction',
  templateUrl: './plan-preference-introduction.component.html',
  styleUrls: ['./plan-preference-introduction.component.css']
})
export class PlanPreferenceIntroductionComponent implements OnInit{
  


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {}
  
  onNext() {
    this.router.navigate(['../booking'], {
      relativeTo: this.route
    })
  }

  onSaveAndExit() {
    this.router.navigate(['../../../../settings/plans'], {
      relativeTo: this.route
    })
  }

  onCancel() {
    this.router.navigate(["../../../../settings/plans"], {
      relativeTo: this.route
    })
  }
}
