import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryFormComponent} from './components/categoryformcomponent/app.categoryform.component';
import { CategoryReactiveFormComponent } from './components/categoryreactiveformcomponent/app.categoryreactiveform.component';
import { CategoryServiceComponent } from './components/servicecomponent/app.categoryservice.component';
import { DeptMasterComponent } from './components/masterdetails/app.deptmaster.component';
import { EmpChildComponent } from './components/masterdetails/app.empchild.component';
import { DeptSenderComponent } from './components/masterdetailscommunication/app.deptsender.component';
import { EmpReceiverComponent } from './components/masterdetailscommunication/app.empreceiver.component';
import { GridDirectiveComponent } from './directives/app.grid.directive';
import { GridComponent } from './components/directivecomponents/app.grid.component';
import { ColorDirective } from './directives/app.color.directive';

// imports: Import all standared and external Angular modules in current
// application
// declarations: Declare all components, directives and pipes of current
// application. (all components/directives/pipes MUST be declared)
// providers: Provide DI Container for all services
// boostrap: Bootstrap one or more components from Declaration
@NgModule({
  declarations: [
    AppComponent, CategoryFormComponent,
  CategoryReactiveFormComponent, CategoryServiceComponent,
  DeptMasterComponent, EmpChildComponent,
  DeptSenderComponent, EmpReceiverComponent,
  GridDirectiveComponent, GridComponent, ColorDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [GridComponent]
})
export class AppModule { }
