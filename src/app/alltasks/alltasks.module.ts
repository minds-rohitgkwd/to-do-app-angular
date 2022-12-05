import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { CompletedComponent } from './completed/completed.component';



@NgModule({
  declarations: [
    AllComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlltasksModule { }
