import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { PlansActions } from 'src/app/ngrx-store/current-workspace/plans/plans.actions';
import { getCurrentPagePlans, getLastEvaluatedPlan, getStorePlansCount } from 'src/app/ngrx-store/current-workspace/plans/plans.selectors';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  pageSize = 5;
  currentPage = 1;
  totalPages: number;
  lastEvaluatedKey$: Observable<any> = this.store.select(getLastEvaluatedPlan())
  loadingPlans = true;
  plans = []
  type = 'one_on_one'
  plansActiveState = []
  planType = 'One-on-one'
  totalNumberOfPlansPresent$: Observable<number> = this.store.select(getStorePlansCount())
  storedPlansCount = 0

  constructor(private store: Store, private actions$: Actions, private snackbarService: SnackbarService,private router: Router, private route: ActivatedRoute) {
    this.totalNumberOfPlansPresent$.subscribe((count) => {
      if(count){
        this.storedPlansCount = count
      }
    })
  }

  ngOnInit(): void {
    this.plansActiveState = [];
    if(this.storedPlansCount > 0)
      this.getPlansFromStore();
    else
      this.getPlans();
  }

  getPlans() {
    this.lastEvaluatedKey$.pipe(take(1)).subscribe((lastEvaluatedKey) => {
      this.store.dispatch(PlansActions.GET_WORKSPACE_PLANS({ "planType": this.type, "exclusiveStartKey": lastEvaluatedKey, "count": this.pageSize }));
      this.actions$.pipe(
        ofType(PlansActions.GET_WORKSPACE_PLANS_SUCCESS)
      ).subscribe(() => {
        this.getPlansFromStore();
      })
      this.actions$.pipe(
        ofType(PlansActions.GET_WORKSPACE_PLANS_FAILURE)
      ).subscribe(() => {
        this.loadingPlans = false;
      })
    })
  }
  
  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.getPlansFromStore();
    
  }

  nextPage(){
    this.lastEvaluatedKey$.pipe(take(1)).subscribe((lastEvaluatedKey) =>{
      this.loadingPlans = true;
      this.currentPage = this.currentPage + 1;
      if(lastEvaluatedKey){
        this.checkForPlans();
      }
      else{
        this.getPlansFromStore();
      }
    })
  }
  checkForPlans(){
    if(this.currentPage * this.pageSize < this.storedPlansCount){
      this.getPlansFromStore();
    }
    else{
      this.getPlans();
    }
  }
  getPlansFromStore() {
    this.store.select(getCurrentPagePlans(this.pageSize, this.currentPage)).pipe(take(1)).subscribe((plans) => {
      this.plans = plans;
      this.loadingPlans = false
      for (let i = 0; i < this.plans.length; i++) {
        this.plansActiveState.push({ [this.plans[i]['id']]: false });
      }
    })
  }
  navigateToCreatePlanWorkflow()
  {
    this.router.navigate(["../../plans/intro"], {
      relativeTo: this.route
    })
  
  }
}
