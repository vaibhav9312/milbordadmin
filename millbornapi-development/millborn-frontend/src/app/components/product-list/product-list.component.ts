import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: any[];

  constructor(private _pmService: ProductManagementService) { 
  }

  ngOnInit() {
    this.getProductList(); 
  }

  getProductList() {
    this._pmService.getProductsList().subscribe(result => {
      this.products = result;
    });
  }

  deleteClick(id){
    this._pmService.deleteProduct(id).subscribe(result =>{
      this.getProductList();
    });
  }
}
