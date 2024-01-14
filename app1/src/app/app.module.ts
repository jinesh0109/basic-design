// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import the AngularMaterialModule
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { EditPlanBookingComponent } from './edit/basic/edit-plan-booking/edit-plan-booking.component';
import { BookingSlotsComponent } from './common/booking-slots/booking-slots.component';
import { EditPlanSchedulingIntervalComponent } from './edit/advance/edit-plan-scheduling-interval/edit-plan-scheduling-interval.component';
import { EditPlanFollowupComponent } from './edit/advance/edit-plan-followup/edit-plan-followup.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPlanBookingComponent,
    BookingSlotsComponent,
    EditPlanSchedulingIntervalComponent,
    EditPlanFollowupComponent
    // EditPlanPriceComponent,
    // AddPlanComponent,
    // EditPlanComponent,
    // EditPlanFollowupComponent,
    // EditPlanSchedulingIntervalComponent,
    // PlanPublishViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule, // Include the AngularMaterialModule
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}