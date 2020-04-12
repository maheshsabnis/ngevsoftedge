import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/routingapp/catlistcomponent/app.categorylist.component';
import { CatAddComponent } from './components/routingapp/addcatcomponent/app.catadd.component';
import { CatEditComponent } from './components/routingapp/editcatcomponent/app.catedit.component';
import { AppComponent } from './app.component';

// the route table
const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'add', component: CatAddComponent,
    children: [
      {path: 'app', component: AppComponent}
    ]},
  {path: 'edit/:id', component: CatEditComponent} // the parameter
];

// forRoot() method will register the
// route table on the root of the application
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
