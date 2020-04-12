import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-mainroute-component',
   template: `
      <h1>The Routing SPA Application</h1>
      <table class="table table-bordered table-striped">
        <tbody>
          <tr>
            <td>
              <a [routerLink]="['']">List</a>
            </td>
            <td>
              <a [routerLink]="['add']">Create</a>
          </td>
          </tr>
        </tbody>
      </table>
      <router-outlet></router-outlet>
   `
})

export class MainRouteComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
