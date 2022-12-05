import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AllComponent } from './alltasks/all/all.component';
import { CompletedComponent } from './alltasks/completed/completed.component';


const routes: Routes = [

  {
    path:'',
    component: AddTaskComponent
  },
  {
    path:'all',
    component: AllComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
