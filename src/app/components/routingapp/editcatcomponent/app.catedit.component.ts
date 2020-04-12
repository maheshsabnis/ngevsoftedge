import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/app.category.model';
import { Logic } from '../../../models/app.logic';
// ActivatedRoute, used for reading the parameter from route
// by subscribing to the route url;
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-catedit-component',
  templateUrl: './app.catedit.view.html'
})

export class CatEditComponent implements OnInit {
  category: CategoryModel;
  private logic: Logic;
  categories: Array<CategoryModel>;

  constructor(private act: ActivatedRoute) {
    this.category  = new CategoryModel(0, '', '', 0);
    this.categories = new Array<CategoryModel>();
    this.logic  = new Logic();
    this.categories  = this.logic.getCategories();
  }
  clear(): void{
    this.category  = new CategoryModel(0, '', '', 0);
  }

  save(): void {
    this.categories = this.logic.addCategory(this.category);
    console.log(JSON.stringify(this.categories));
  }
  // read the parameter from url
  ngOnInit() {
    this.act.params.subscribe(p=> {
       let id = p.id;
       // filter data from categories array based on the
       // id read from the url
       let cats = this.categories.filter((c,i)=> {
         return c.CategoryRowId == id;
       });
       // assing the recods from the cats array to the category
       this.category = cats[0];
    });

  }
}
