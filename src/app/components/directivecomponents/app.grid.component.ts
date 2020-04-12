import { Component, OnInit } from '@angular/core';
import { Departments, Employees } from '../../models/app.coomunication.models';

@Component({
  selector: 'app-grid-component',
  template:`
    <div>
      Selected Record is: {{row|json}}
    </div>
    <br/>
    <table class="table table-bordered table-striped">
       <tbody>
         <tr>
           <td>
              <input type="radio" name="r" value="red" (click)="setSelectedColor($event)"> red
           </td>
           <td>
              <input type="radio" name="r" value="blue" (click)="setSelectedColor($event)"> blue
           </td>
           <td>
              <input type="radio" name="r" value="yellow" (click)="setSelectedColor($event)"> yellow
           </td>
         </tr>
       </tbody>
    </table>
    <app-griddirective-component [DataSource]="depts" [color]="selectColor"
    (rowClick)="selectedRowData($event)"></app-griddirective-component>
    <hr/>
    <app-griddirective-component [DataSource]="emps" [color]="selectColor"
    (rowClick)="selectedRowData($event)"></app-griddirective-component>

  `
})

export class GridComponent implements OnInit {
  depts =  Departments;
  emps = Employees;
  row: any;
  selectColor: string;
  constructor() {
    this.selectColor  = '';
  }

  ngOnInit() { }
  selectedRowData(event): void {
      this.row = event;
  }
  setSelectedColor(evt): void {
    this.selectColor = evt.target.value;
    console.log(this.selectColor);
  }
}
