import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from './../models/app.category.model';
import { ResponseMessage, Register, Login, Product } from '../models/app.securiry.models';
// providedIn: 'root' --> means that the root of the application
// will be having the CategoryService injected so that all
// components can access it
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string;
  // inject ctor with 'HttpClient' class
  // this will provide Http instance for
  // accessing its method got get/post/put/delete
  // HttpClient will be resolved by HttpClientModeule class
  constructor(private http: HttpClient){
    this.url = "http://localhost:42675/api/CategoryAPI";
  }

  getData(): Observable<CategoryModel[]> {
    let resp:Observable<CategoryModel[]> = null;
    resp = this.http.get<CategoryModel[]>(this.url);
    return resp;
  }

  postData(cat: CategoryModel): Observable<CategoryModel> {
    let resp:Observable<CategoryModel> = null;
    const options = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
    };
    resp = this.http.post<CategoryModel>(this.url, cat, options);
    return resp;
  }

  putData(cat: CategoryModel): Observable<CategoryModel> {
    let resp:Observable<CategoryModel> = null;
    const options = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
    };
    resp = this.http.put<CategoryModel>(`${this.url}/${cat.CategoryRowId}`, cat, options);
    return resp;
  }

  deleteData(id: number): Observable<boolean> {
    let resp:Observable<boolean> = null;
    resp = this.http.delete<boolean>(`${this.url}/${id}`);
    return resp;
  }


  registerUser(user: Register): Observable<ResponseMessage> {
    let resp:Observable<ResponseMessage> = null;
    resp = this.http.post<ResponseMessage>('http://localhost:5000/api/Auth/Register',
      user, {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      });
    return resp;
  }

  loginUser(user: Login): Observable<ResponseMessage> {
    let resp:Observable<ResponseMessage> = null;
    resp = this.http.post<ResponseMessage>('http://localhost:5000/api/Auth/Login',
      user, {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      });
    return resp;
  }

  getProducts(token: string): Observable<Product[]> {
    let resp:Observable<Product[]> = null;
    resp = this.http.get<Product[]>('http://localhost:5000/api/Products', {
      headers: new HttpHeaders({
        'AUTHORIZATION': `bearer ${token}`
      })
    });
    return resp;
  }



}
