import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CategoryModel} from '../../models/app.category.model';
import {Logic} from '../../models/app.logic';
import {CustomValidator} from './app.custom.validations';
@Component({
  selector:'app-categoryreactiveform-component',
  templateUrl: './app.categoryreactiveform.view.html'
})
export class CategoryReactiveFormComponent implements OnInit {
  category: CategoryModel;
  categories: Array<CategoryModel>;
  private logic: Logic;
  tableColumns: Array<string>;
  // define FormGroup
  frmCategory: FormGroup;

  constructor(){
    this.category  = new CategoryModel(0, '', '', 0);
    this.categories = new Array<CategoryModel>();
    this.logic  = new Logic();
    this.tableColumns = new Array<string>();
    // create an instance of FormGroup based on FormControl
    // that map the Model class property to the FormControlName
    // to create a formsControlsCollection
    // formControlsCollection is Key/Value pair
    // where key is the FormControl that will bind to HTML Elements
    // value is the Property from Model class
    // apply validation on Model properties using static methods of Validators class
    this.frmCategory = new FormGroup({
      CategoryRowId: new FormControl(this.category.CategoryRowId,
         Validators.compose([
           Validators.required,
           Validators.minLength(2),
           Validators.maxLength(6),
           Validators.pattern('[0-9]+'),
           CustomValidator.checkEven
         ])),
      CategoryId: new FormControl(this.category.CategoryId),
      CategoryName: new FormControl(this.category.CategoryName),
      BasePrice: new FormControl(this.category.BasePrice)
    });
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

  clear(): void {
    this.category  = new CategoryModel(0, '', '', 0);
    // clear data of all Editable elements
    this.frmCategory.setValue(this.category);
  }

  save(): void {
    console.log(`Value of FormGroup is ${JSON.stringify(this.frmCategory.value)}`);
    // read value of each formControl name and aggrigarte it in frmCategory
    this.category = this.frmCategory.value;
    this.categories = this.logic.addCategory(this.category);
    console.log(JSON.stringify(this.categories));
  }
  getSelectedCategory(cat: CategoryModel): void {
    // pass the selected category nobject to 'setValue()' method of frmCategory
    this.frmCategory.setValue(cat);
    // this.frmCategory = new FormGroup({
    //   CategoryRowId: new FormControl(cat.CategoryRowId),
    //   CategoryId: new FormControl(cat.CategoryId),
    //   CategoryName: new FormControl(cat.CategoryName),
    //   BasePrice: new FormControl(cat.BasePrice)
    // });
  }
}
