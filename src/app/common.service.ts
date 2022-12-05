import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  localData: Array<any> = JSON.parse(localStorage.getItem('tasks')!);

  constructor() { }

  getData() : any{
    return this.localData;
  }

  setData(formValue: any){
      this.localData.push(formValue);
      localStorage.setItem('tasks', JSON.stringify(this.localData));
  }

}
