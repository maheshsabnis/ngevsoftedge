import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee, Employees } from '../../models/app.coomunication.models';

@Component({
  selector: 'app-empchild-component',
  template: `
  <h2>Employees</h2>
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
    <br/>
    <input type="button" value="Notify" class="btn btn-warning"
     (click)="notifyToParent()"/>
  `
})

export class EmpChildComponent implements OnInit {
  emp: Employee;
  emps = Employees;
  private _DeptNo: number;
  filteredEmployees: Array<Employee>;

  // the Output will be able to return data from component
  // EventEmitter<T> class is used to define an event
  // that will be emit by comoponent
  // the subscribing component should bind to notified event
  // using event binding e.g. (notify)
  // the parent component must subscribe to the event
  // the data will be received by parent using $event object
  // T is the payload data type, that is the data emitted
  // from the component
  @Output()
  notify: EventEmitter<string>;

  constructor() {
    this.emp = new Employee(0, '', 0);
    this.filteredEmployees = new Array<Employee>();
    this.notify = new EventEmitter<string>();
  }

  ngOnInit() { }

  // setter property that will set value for _DeptNo
  // Input decorator will make the property used for
  // property binding e.g. [DeptNo]
  @Input()
  set DeptNo(v: number) {
    this._DeptNo = v;
    console.log(`Value received ${this._DeptNo}`);
  }

  // return data from _DeptNo
  get DeptNo(): number {
    return this._DeptNo;
  }


  // readonly property that will be used to filter data
  // based on DeptNo received from Parennt
  // this property will be exececuted every-time
  // the DeptNo changes

  get FilteredEmployees(): Array<Employee> {
    this.filteredEmployees = new Array<Employee>();
    if(this._DeptNo > 0) {
      this.filteredEmployees = this.emps.filter((e,i) => {
        return e.DeptNo === this._DeptNo;
      });
    } else {
      this.filteredEmployees = this.emps;
    }
    return this.filteredEmployees;
  }

  notifyToParent(): void {
    // the data passed to emit() method will be read by
    // the subscriber using $event object
    this.notify.emit(`We Serahced ${this.filteredEmployees.length}
     records based on DeptNo ${this._DeptNo}`);
  }

}
