import { Component, OnInit } from '@angular/core';
import { Department, Departments } from '../../models/app.coomunication.models';
import { CommunicationService } from '../../services/app.communication.service';

@Component({
  selector: 'app-deptsender-component',
  template: `
    <h2>Department Sender</h2>

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
  `
})

export class DeptSenderComponent implements OnInit {
  dept: Department;
  depts = Departments;
  message: string;
  constructor(private serv: CommunicationService) {
    this.dept = new Department(0, '');
    this.message = "";
  }
  getSelectedDepartment(d: Department): void {
    this.dept = d;
    this.serv.publishData(this.dept.DeptNo);
  }

  ngOnInit() { }
}
