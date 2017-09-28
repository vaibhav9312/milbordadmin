import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../common/headers';
import { serviceUrls } from '../common/serviceUrls';

@Injectable()
export class ProductManagementService {

  constructor(private authHttp: AuthHttp) { }

  getProductsList() {
    return this.authHttp.get(serviceUrls.getProductslist, { headers: contentHeaders }).map(res => res.json());
  }

  productCreate(body: any) {
    return this.authHttp.post(serviceUrls.getProductsCreate, body, { headers: contentHeaders }).map(res => res.json());
  }

   productImage(body: any) {
    return this.authHttp.post(serviceUrls.getProductsImages, body, { headers: contentHeaders }).map(res => res.json());
  }
  deleteProduct(id) {
    return this.authHttp.delete(serviceUrls.productdelete + id, { headers: contentHeaders }).map(res => res.json());
  }

  updateProduct(id, body) {
    return this.authHttp.put(serviceUrls.productupdate + id, body, { headers: contentHeaders }).map(res => res.json());
  }
  getProductDetails(id:Number){
    return this.authHttp.get(serviceUrls.productDetails + id).map(res => res.json());
  }

  deleteExisitingImageDoc(id){
    return this.authHttp.delete(serviceUrls.deleteProductDocuments + "/" + id).map(res => res.json());
  }
   
}
