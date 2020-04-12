import {Component, OnInit} from '@angular/core';
import {CategoryModel} from './../../../models/app.category.model';
import {Logic} from './../../../models/app.logic';

// Router : Used for explicit routing
import {Router} from '@angular/router';
@Component({
  selector:'app-categorylist-component',
  templateUrl: './app.catlist.view.html'
})
export class CategoryListComponent implements OnInit {
  category: CategoryModel;
  categories: Array<CategoryModel>;
  private logic: Logic;
  tableColumns: Array<string>;
  constructor(private router: Router){
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



// navigate to the edit view based on the catId
  edit(catId: number): void {
    console.log(catId);
    this.router.navigate(['edit', catId]);
  }
}
