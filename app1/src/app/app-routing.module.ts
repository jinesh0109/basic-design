import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditPlanBookingComponent } from './edit/basic/edit-plan-booking/edit-plan-booking.component';

import { PlanPublishViewComponent } from './plan-publish-view/plan-publish-view.component';
import { PlanFollowupIntroductionComponent } from './plan-followup-introduction/plan-followup-introduction.component';
import { EditPlanFollowupComponent } from './edit/advance/edit-plan-followup/edit-plan-followup.component';
import { EditPlanSchedulingIntervalComponent } from './edit/advance/edit-plan-scheduling-interval/edit-plan-scheduling-interval.component';

const routes: Routes = [
  // {
  //   path:'add',
  //   component: AddPlanComponent
  // },
  // {
  //   path:'edit',
  //   component: EditPlanComponent
  // },
  {
    path:'booking',
    component: EditPlanBookingComponent
  },
  // {
  //   path:'price',
  //   component: EditPlanPriceComponent,
  // },
  {
    path:'live',
    component: PlanPublishViewComponent
  },
  {
    path:'followup/intro',
    component: PlanFollowupIntroductionComponent
  },
  {
    path:'followup/add',
    component: EditPlanFollowupComponent
  },
  {
    path:'scheduling-interval',
    component: EditPlanSchedulingIntervalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}