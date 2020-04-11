import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee, Employees } from '../../models/app.coomunication.models';
import { CommunicationService } from '../../services/app.communication.service';

@Component({
  selector: 'app-empreceiver-component',
  template: `
  <h2>Employee Receiver</h2>
    <table class="table table-bordered table-striped table-danger">
        <thead>
          <tr>
            <th>EmpNo</th>
            <th>EmpName</th>
            <th>DeptNo</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let e of FilteredEmployees">
            <td>{{e.EmpNo}}</td>
            <td>{{e.EmpName}}</td>
            <td>{{e.DeptNo}}</td>
          </tr>
        </tbody>
    </table>

  `
})

export class EmpReceiverComponent implements OnInit {
  emp: Employee;
  emps = Employees;
  DeptNo: number;
  filteredEmployees: Array<Employee>;

   constructor(private serv: CommunicationService) {
    this.emp = new Employee(0, '', 0);
    this.filteredEmployees = new Array<Employee>();
  }

  // subscribe to the event from the service
  // so that event the event is emiting the data
  // it will be received over the subscription
  ngOnInit() {
    this.serv.receiveData.subscribe((id)=> {
        this.DeptNo = id;
    });
  }



  // readonly property that will be used to filter data
  // based on DeptNo received from Parennt
  // this property will be exececuted every-time
  // the DeptNo changes

  get FilteredEmployees(): Array<Employee> {
    this.filteredEmployees = new Array<Employee>();
    if(this.DeptNo > 0) {
      this.filteredEmployees = this.emps.filter((e,i) => {
        return e.DeptNo === this.DeptNo;
      });
    } else {
      this.filteredEmployees = this.emps;
    }
    return this.filteredEmployees;
  }



}
