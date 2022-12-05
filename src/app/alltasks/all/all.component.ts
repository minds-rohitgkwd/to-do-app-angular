import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private service : CommonService) { }

  taskData : Array<any>;

  ngOnInit(): void {
     this.getData()
  }

  getData(): any{
      this.taskData =  this.service.getData()
    }
}
