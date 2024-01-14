import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subject, take } from 'rxjs';
import { OneOnOnePlan } from 'src/app/beans/plan';
import { PlansActions } from 'src/app/ngrx-store/current-workspace/plans/plans.actions';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-edit-plan-description',
  templateUrl: './edit-plan-description.component.html',
  styleUrls: ['./edit-plan-description.component.css']
})
export class EditPlanDescriptionComponent implements OnInit{
  planForm: FormGroup;
  destroy$ = new Subject<void>();
  editingPlan: boolean;
  plan: OneOnOnePlan;

  quillConfiguration = {
    // formula: true,
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video'],
      // ['blockquote', 'code-block'],
      // ['clean'],
    ]
  };


  constructor(private formBuilder: RxFormBuilder, private store: Store, private route: ActivatedRoute, private router: Router, private snackBarService: SnackbarService, private actions$: Actions) {
    this.plan = new OneOnOnePlan();
    this.planForm = this.formBuilder.formGroup(this.plan)
  }
  ngOnInit(): void {
    this.getPlanData();
  }

  getPlanData(){
    this.store.dispatch(PlansActions.GET_PLAN());
    this.actions$.pipe(ofType(PlansActions.GET_PLAN_SUCCESS), take(1)).subscribe((res) => {
      this.plan = res?.plan
      this.planForm.controls.description?.setValue(this.plan?.description)  
    })
    this.actions$.pipe(ofType(PlansActions.GET_PLAN_FAILURE), take(1)).subscribe((res) => {
      this.snackBarService.openSnackBar("Failed to get a plan", null);
    })
  }
  
  editPlanDescription() {
    const plan = new OneOnOnePlan();
    plan.description = this.planForm.value['description'];
    this.store.dispatch(PlansActions.EDIT_PLAN({ plan: plan }))
  }

  onNext() {
    this.editingPlan = true;
    this.editPlanDescription();
    this.actions$.pipe(ofType(PlansActions.EDIT_PLAN_SUCCESS), take(1)).subscribe((res) => {
      this.editingPlan = false;
      this.router.navigate(['../preferences/intro'], {
        relativeTo: this.route
      })
    })
    this.actions$.pipe(ofType(PlansActions.EDIT_PLAN_FAILURE), take(1)).subscribe((res) => {
      this.editingPlan = false;
      this.snackBarService.openSnackBar("Failed to add description for a plan", null);
    })

    // this.router.navigate(['../', this.id, 'description'],{
    //   relativeTo:this.route
    // })
  }

  onSaveAndExit() {
    this.editingPlan = true;
    this.editPlanDescription();
    this.actions$.pipe(ofType(PlansActions.EDIT_PLAN_SUCCESS), take(1)).subscribe((res) => {
      this.editingPlan = false;
      this.router.navigate(['../../../settings/plans'], {
        relativeTo: this.route
      })
    })
    this.actions$.pipe(ofType(PlansActions.EDIT_PLAN_FAILURE), take(1)).subscribe((res) => {
      this.editingPlan = false;
      this.snackBarService.openSnackBar("Failed to add description for a plan", null);
    })
  }

  onBack() {
    this.router.navigate(["../edit"], {
      relativeTo: this.route
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
