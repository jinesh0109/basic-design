import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    // FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
