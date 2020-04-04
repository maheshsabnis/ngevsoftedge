import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryFormComponent} from './components/categoryformcomponent/app.categoryform.component';
import { CategoryReactiveFormComponent } from './components/categoryreactiveformcomponent/app.categoryreactiveform.component';

// imports: Import all standared and external Angular modules in current
// application
// declarations: Declare all components, directives and pipes of current
// application. (all components/directives/pipes MUST be declared)
// providers: Provide DI Container for all services
// boostrap: Bootstrap one or more components from Declaration
@NgModule({
  declarations: [
    AppComponent, CategoryFormComponent,
  CategoryReactiveFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CategoryReactiveFormComponent]
})
export class AppModule { }
