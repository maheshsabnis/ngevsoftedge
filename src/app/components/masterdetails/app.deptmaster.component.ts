import { Component, OnInit } from '@angular/core';
import { Department, Departments } from '../../models/app.coomunication.models';

@Component({
  selector: 'app-deptmaster-component',
  template: `
    <h2>Departments</h2>
    <div class="container">
      <h3>
        {{message}}
      </h3>
    </div>
    <table class="table table-bordered table-striped table-dark">
        <thead>
          <tr>
            <th>DeptNo</th>
            <th>DeptName</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let d of depts" (click)="getSelectedDepartment(d)">
            <td>{{d.DeptNo}}</td>
            <td>{{d.DeptName}}</td>
          </tr>
        </tbody>
    </table>
    <hr>
    <app-empchild-component [DeptNo]="dept.DeptNo" (notify)="getNotified($event)" ></app-empchild-component>
  `
})

export class DeptMasterComponent implements OnInit {
  dept: Department;
  depts = Departments;
  message: string;
  constructor() {
    this.dept = new Department(0, '');
    this.message = "";
  }
  getSelectedDepartment(d: Department): void {
    this.dept = d;
  }
  getNotified(event): void {
    this.message = event;
  }
  ngOnInit() { }
}
