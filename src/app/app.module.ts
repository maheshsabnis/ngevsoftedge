import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryFormComponent} from './components/categoryformcomponent/app.categoryform.component';
import { CategoryReactiveFormComponent } from './components/categoryreactiveformcomponent/app.categoryreactiveform.component';
import { CategoryServiceComponent } from './components/servicecomponent/app.categoryservice.component';

// imports: Import all standared and external Angular modules in current
// application
// declarations: Declare all components, directives and pipes of current
// application. (all components/directives/pipes MUST be declared)
// providers: Provide DI Container for all services
// boostrap: Bootstrap one or more components from Declaration
@NgModule({
  declarations: [
    AppComponent, CategoryFormComponent,
  CategoryReactiveFormComponent, CategoryServiceComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CategoryServiceComponent]
})
export class AppModule { }
