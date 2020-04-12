import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/app.category.model';
import { Logic } from '../../../models/app.logic';

@Component({
  selector: 'app-catadd-component',
  templateUrl: './app.catadd.view.html'
})

export class CatAddComponent implements OnInit {
  category: CategoryModel;
  private logic: Logic;
  categories: Array<CategoryModel>;

  constructor() {
    this.category  = new CategoryModel(0, '', '', 0);
    this.categories = new Array<CategoryModel>();
    this.logic  = new Logic();
  }
  clear(): void{
    this.category  = new CategoryModel(0, '', '', 0);
  }

  save(): void {
    this.categories = this.logic.addCategory(this.category);
    console.log(JSON.stringify(this.categories));
  }
  ngOnInit() { }
}
