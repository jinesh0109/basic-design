import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plan-introduction',
  templateUrl: './plan-introduction.component.html',
  styleUrls: ['./plan-introduction.component.css']
})
export class PlanIntroductionComponent implements OnInit{

  constructor(private route:ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {}
  onNext(){
    this.router.navigate(["../add"],{
      relativeTo:this.route
    })
  }

  onCancel(){
    this.router.navigate(["../../settings/plans"],{
      relativeTo:this.route
    })
  }
}
