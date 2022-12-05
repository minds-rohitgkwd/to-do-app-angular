import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private service:CommonService) { }

  taskData :any;

  ngOnInit(): void {
    this.getData();
  }


  getData(): any{
    this.taskData =  this.service.getData()
  }
}
