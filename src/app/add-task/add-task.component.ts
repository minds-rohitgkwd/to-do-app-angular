import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

  reactiveForm : FormGroup;

  constructor(
    public router: Router,
    private service: CommonService,
    public fb: FormBuilder
  ) {}

  taskDesc: string = '';
  taskTitle: string = '';
  taskArray: any = this.service.getData();



  ngOnInit(): void {

    this.reactiveForm = this.fb.group({
        'taskTitle' : new FormControl('',[
          Validators.required
        ]),
        'taskDesc' : new FormControl()
    })
  }



  submitForm(){
    this.service.setData(this.reactiveForm.value)
  }


  // ////////////////////////////////////////////////

// Template driven form

  // method to add a new task

  // addTask(formValue: any) {
  //   if (formValue.taskTitle.trim().length != 0) {
  //     // this.taskArray.push(formValue);
  //     // localStorage.setItem('tasks', JSON.stringify(this.taskArray));

  //     this.service.setData(formValue);
  //   }
  // }


}

