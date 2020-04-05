import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/app.category.service';
import { CategoryModel } from '../../models/app.category.model';
import { Register, Login } from '../../models/app.securiry.models';
@Component({
  selector: 'app-categoryservice-component',
  template: `
     <input type="button" class="btn btn-warning" value="Get Data"
      (click)="loadData()"/>
     <br/>
     <input type="button" class="btn btn-success" value="Post Data"
     (click)="saveData()"/>
     <br/>
     <input type="button" class="btn btn-default" value="Put Data"
     (click)="updateData()"/>
     <br/>
     <input type="button" class="btn btn-danger" value="Delete Data"
     (click)="deleteData()"/>
     <hr/>
     <br/>
     <input type="button" class="btn btn-success" value="Register User"
     (click)="registerNewUser()"/>
     <br/>
     <input type="button" class="btn btn-success" value="Login User"
     (click)="authUser()"/>
     <br/>
     <input type="button" class="btn btn-success" value="Get Products"
     (click)="getProductsData()"/>
  `
})
export class CategoryServiceComponent implements OnInit {
  // inject the service in the ctor
  constructor(private serv: CategoryService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.serv.getData().subscribe((resp)=> {
      console.log(`Data Received ${JSON.stringify(resp)}`);
    },(error)=> {
      console.log(`Error Occured ${error}`);
    });
  }

  saveData(): void {
    let cat: CategoryModel =new CategoryModel(0, 'Cat-20001', 'MECH', 1200);
    this.serv.postData(cat).subscribe((resp)=> {
      console.log(`Data Received after post ${JSON.stringify(resp)}`);
    },(error)=> {
      console.log(`Error Occured ${error}`);
    });
  }

  updateData(): void {
    let cat: CategoryModel =new CategoryModel(8, 'Cat-20001', 'MECH', 12000);
    this.serv.putData(cat).subscribe((resp)=> {
      console.log(`Data Received after put ${JSON.stringify(resp)}`);
    },(error)=> {
      console.log(`Error Occured ${error}`);
    });
  }

  deleteData(): void {
    const id = 8;
    this.serv.deleteData(id).subscribe((resp)=> {
      console.log(`Data Received after delete ${resp}`);
    },(error)=> {
      console.log(`Error Occured ${error}`);
    });
  }

  registerNewUser(): void {
     let user: Register = new Register("pqr1@msit.com", "P@ssw0rd_","P@ssw0rd_");
     this.serv.registerUser(user).subscribe((resp)=> {
      console.log(`Registretion Success --> ${resp.message}`);
    },(error)=> {
      console.log(`Error Occured ${error}`);
    });
  }

  authUser(): void {
    let user: Login = new Login("pqr1@msit.com", "P@ssw0rd_");
    this.serv.loginUser(user).subscribe((resp)=> {
      // save the tokne in LocalStorage of the Browser
      sessionStorage.setItem('token', resp.message);
      console.log(`Login Success --> ${resp.message}`);
   },(error)=> {
     console.log(`Error Occured ${error}`);
   });
 }

 getProductsData(): void {
   // read the token from loaclStorage
  let token = sessionStorage.getItem('token');
  this.serv.getProducts(token).subscribe((resp)=> {
    console.log(`Products Data Received ${JSON.stringify(resp)}`);
 },(error)=> {
   console.log(`Error Occured ${error}`);
 });
}




}
