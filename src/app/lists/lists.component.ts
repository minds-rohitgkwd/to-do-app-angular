import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {
  constructor(public router: Router, private service: CommonService) {}

  myLog = console.log.bind(document);

  isDone: boolean;
  isMarked: any;
  forEdit: boolean;
  taskDesc: any;
  taskTitle: any;
  displayStyle: string ='none'
  currIndex: number ;



@Input() taskData: any ;

ngOnInit(): void {

}

  // method for marking as task done

  markDone(i: number): void {
    if (this.taskData[i]['isDone'] === 'true') {
      this.taskData[i]['isDone'] = 'false';
      this.isDone = false;
    } else {
      this.taskData[i]['isDone'] = 'true';
      this.isDone = true;
    }
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }

  // method to delete all tasks

  deleteAllTasks() {
    this.taskData.length = 0;      // make taskdata empty
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }

  deleteTask(i: number) {
    this.taskData.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }

  getCurrTask(i:number) {
    this.displayStyle= 'block'
    this.taskTitle = this.taskData[i]['taskTitle'];
    this.taskDesc = this.taskData[i]['taskDesc'];
    this.currIndex = i;
  }

  // method to get data from CommonService

  getData(): any{
    this.taskData = this.service.getData();
  }

  updateTask(){
     this.taskData[this.currIndex]['taskTitle'] = this.taskTitle;
    this.taskData[this.currIndex]['taskDesc'] = this.taskDesc;

    localStorage.setItem('tasks', JSON.stringify(this.taskData))
    this.displayStyle = 'none'
  }
}
