import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-griddirective-component',
  template:`
     <h1>The DaraGrid Directive Component</h1>
     <table class="table table-bordered table-striped table-dark">
        <thead>
          <tr>
            <th *ngFor="let h of tableColumns">{{h}}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of DataSource" [setColor]="color" (click)="onRowClick(r)">
              <td *ngFor="let h of tableColumns">
                {{r[h]}}
              </td>
          </tr>
        </tbody>
     </table>
  `
})

export class GridDirectiveComponent implements OnInit {
   private _dataSource: Array<any>;
   private _color: string;
  @Output() rowClick: EventEmitter<any>;
  tableColumns: Array<string>;
  constructor() {
    this._dataSource = new Array<any>();
    this.rowClick = new EventEmitter<any>();
    this.tableColumns = new Array<string>();
    this._color = '';
  }

  @Input()
  set color(val: string) {
    this._color = val;
  }

  get color(): string {
    return this._color;
  }

  @Input()
  set DataSource(value: Array<any>) {
    if(value.length >0) {
    this._dataSource = value;
    for(let p in this._dataSource[0]) {
      this.tableColumns.push(p)
     }
    } else {
      this._dataSource = new Array<any>();
    }
  }
  get DataSource(): Array<any> {
    return this._dataSource;
  }

  onRowClick(row: any): void {
      this.rowClick.emit(row);
  }

  ngOnInit() { }
}
