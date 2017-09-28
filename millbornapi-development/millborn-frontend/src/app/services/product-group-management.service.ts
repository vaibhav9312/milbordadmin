import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../common/headers';
import { serviceUrls } from '../common/serviceUrls';

@Injectable()
export class ProductGroupManagementService {
  constructor(private authHttp: AuthHttp) { }
  
  getProductGroupsList() {
    return this.authHttp.get(serviceUrls.productGroupLists, { headers: contentHeaders }).map(res => res.json());
  }

  getProductSubGroupsList() {
    return this.authHttp.get(serviceUrls.productSubGroupLists, { headers: contentHeaders }).map(res => res.json());
  }

  getProductSubGroupsListByid(id) {
    return this.authHttp.get(serviceUrls.productSubGroupListByID + id, { headers: contentHeaders }).map(res => res.json());
  }

  getProductCategoryListByid(id) {
    return this.authHttp.get(serviceUrls.ProductCategoryListByID + id, { headers: contentHeaders }).map(res => res.json());
  }

  getProductSubCategoryListsById(id) {
    return this.authHttp.get(serviceUrls.ProductSubCategoryListsByID + id, { headers: contentHeaders }).map(res => res.json());
  }

  getProductCategoryList() {
    return this.authHttp.get(serviceUrls.productCategoryLists, { headers: contentHeaders }).map(res => res.json());
  }

  getProductSubCategoryLists() {
    return this.authHttp.get(serviceUrls.productSubCategoryLists, { headers: contentHeaders }).map(res => res.json());
  }
}
