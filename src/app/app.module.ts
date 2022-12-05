import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListsComponent } from './lists/lists.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ImportanttaskComponent } from './importanttask/importanttask.component';
import {AlltasksModule} from './alltasks/alltasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListsComponent,
    AddTaskComponent,
    ImportanttaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlltasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
