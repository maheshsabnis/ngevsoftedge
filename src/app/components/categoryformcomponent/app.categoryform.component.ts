import {Component, OnInit} from '@angular/core';
import {CategoryModel} from './../../models/app.category.model';
import {Logic} from './../../models/app.logic';
@Component({
  selector:'app-categoryform-component',
  templateUrl: './app.categoryform.view.html'
})
export class CategoryFormComponent implements OnInit {
  category: CategoryModel;
  categories: Array<CategoryModel>;
  private logic: Logic;
  tableColumns: Array<string>;
  constructor(){
    this.category  = new CategoryModel(0, '', '', 0);
    this.categories = new Array<CategoryModel>();
    this.logic  = new Logic();
    this.tableColumns = new Array<string>();
  }

  // the method that will be immediately invoked after ctor
  // use this method to write heavy logic that cannot be written in ctor
  ngOnInit(){
    // iterate over the category class to read all its public properties
    for(let c in this.category) {
       this.tableColumns.push(c);
    }
    console.log(JSON.stringify(this.tableColumns));
    this.categories = this.logic.getCategories();
  }

  clear(): void{
    this.category  = new CategoryModel(0, '', '', 0);
  }

  save(): void {
    this.categories = this.logic.addCategory(this.category);
    console.log(JSON.stringify(this.categories));
  }
  getSelectedCategory(cat: CategoryModel): void {
    // create a blank target object {}
    // store data from cat in the blank object
    // point the category to blank object
    this.category = Object.assign({},cat);
  }
}
