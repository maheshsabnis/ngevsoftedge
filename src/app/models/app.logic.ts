import {CategoryModel} from './app.category.model';
export class Logic {
   private categories: Array<CategoryModel>;
   constructor(){
     this.categories =new Array<CategoryModel>();
     this.categories.push(new CategoryModel(1,'Cat101', 'ECT', 12000));
     this.categories.push(new CategoryModel(2,'Cat102', 'ECL', 100));
     this.categories.push(new CategoryModel(3,'Cat103', 'FOD', 10));
   }

   getCategories(): Array<CategoryModel> {
     return this.categories;
   }

   addCategory(cat: CategoryModel): Array<CategoryModel> {
     this.categories.push(cat);
     return this.categories;
  }

}
