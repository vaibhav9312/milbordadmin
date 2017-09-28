import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { ProductManagementService } from '../../services/product-management.service';
import { ProductGroupManagementService } from '../../services/product-group-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { NotificationsService } from 'angular2-notifications';


// const URL = '/api/';
const UPLOADURL = 'http://localhost:3030/file/uploads';


@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  public products: any[];
  isPublish: false
  productreg: FormGroup;
  ProductGroupList = FormGroup;
  buttonText: String = "Save Draft";
  buttonText2: String = "Publish";

  myOptions: IMultiSelectOption;
  myGroupOptions: IMultiSelectOption;
  myCategoryOptions: IMultiSelectOption;
  myProductSubCategory: IMultiSelectOption;

  public uploaderProfileImage: FileUploader = new FileUploader({ url: UPLOADURL });
  public uploaderGallery: FileUploader = new FileUploader({ url: UPLOADURL });
  public uploaderDocuments: FileUploader = new FileUploader({ url: UPLOADURL });

  public groupSelected = false;
  public subGroupSelected = false;
  public categorySelected = false;

  public existingDocuments = [];
  public existingGallery = [];

  // Settings configuration 
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    displayAllSelectedText: true,
    closeOnSelect: true,
    selectionLimit: 1,
    autoUnselect: true,
    closeOnClickOutside: true
  };

  // Text configuration 
  myTextsGroup: IMultiSelectTexts = {
    defaultTitle: 'Select Group',
  };
  myTextsSubGroup: IMultiSelectTexts = {
    defaultTitle: 'Select Subgroup',
  };
  myTextsCategory: IMultiSelectTexts = {
    defaultTitle: 'Select Category',
  };
  myTextsSubCategory: IMultiSelectTexts = {
    defaultTitle: 'Select Subcategory',
  };


  constructor(private _pmService: ProductManagementService, private _pgServices: ProductGroupManagementService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, public _notificationService: NotificationsService) {
    this.productreg = this.fb.group({
      ProductId: 0,
      ProductTitle: ["", Validators.required],
      GroupId: [, Validators.required],
      SubGroupId: [, Validators.required],
      CategoryId: [, Validators.required],
      SubCategoryId: [, Validators.required],
      ProductDescription: ["", Validators.required],
      Tags: [, Validators.required],
      Price: ["", Validators.required],
      MinimumQty: ["", Validators.required],
      ProductImage: [""],
      CreatedAt: [""],
      CreatedBy: [""],
      ModifiedAt: [""],
      ModifiedBy: [""],
      IsActive: 0
    });

    this.productreg.patchValue({ Tags: [] });

    this.uploaderGallery.onAfterAddingFile = (file) => { file.withCredentials = false; file.alias = "fieldName" };
    this.uploaderProfileImage.onAfterAddingFile = (file) => { file.withCredentials = false; file.alias = "fieldName" };
    this.uploaderDocuments.onAfterAddingFile = (file) => { file.withCredentials = false; file.alias = "fieldName" };

  }

  ngOnInit() {
    let id = 0;
    this.route.params.subscribe(params => {
      id = +params["id"];
      if (!(isNaN(id))) {
        this.getProductDetails(id);
      }
    });
    this.getProductGroupList();
  }


  doRegisterProduct({ value, valid }) {
    debugger;

    if (valid) {

      Promise.all([this.uploadProductImageFiles(), this.uploadGalleryFiles(), this.uploadDocumentFiles()]).then((resolve) => {
        debugger;

        let profileimage = "";
        if (resolve[0]["status"] == 200)
          profileimage = JSON.parse(resolve[0]["data"][0])[0].filename;

        let galleryImages = []
        if (resolve[1]["status"] == 200) {
          for (let i = 0; i < resolve[1]["data"].length; i++)
            galleryImages.push(JSON.parse(resolve[1]["data"][i])[0].filename);
        }

        let docfiles = [];
        if (resolve[2]["status"] == 200) {
          for (let i = 0; i < resolve[2]["data"].length; i++)
            docfiles.push(JSON.parse(resolve[2]["data"][i])[0].filename);
        }

        `add profile picture and gallery images /doc files in values and then insert it`

        if (profileimage)
          value.ProductImage = profileimage;

          value.GalleryImages = galleryImages;

          value.DocumentFiles = docfiles;

        this.createOrUpdateProduct(value);

      }, (reject) => {
        alert("some error occured in file upload")
      }).catch((error) => {
        console.log(error);
      });

    }
    else {

      this._notificationService.error(
        'Validation Error',
        'Please fill the complete form',
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: true,
          maxLength: 100
        });

    }

  }

  createOrUpdateProduct(value) {
    value.Tags = value.Tags.join(',');

    if (this.isPublish) {
      value["IsActive"] = 1;
    }
    else{
      value["IsActive"] = 0;
    }
    if (!value["ProductId"]) {
      console.log('************* Create');
      this._pmService.productCreate(value).subscribe(result => {
        this.router.navigate(['/app/product/list']);
      });
    }
    else {
      console.log(value["ProductId"], value, "Update", '**********');
      this._pmService.updateProduct(value["ProductId"], value).subscribe(result => {
        this.router.navigate(['/app/product/list']);
      });
    }
  }

  uploadGalleryFiles() {

    let self = this;
    return new Promise(function (resolve, reject) {

      if (self.uploaderGallery.queue.length == 0)
        resolve({ status: 404, data: [] });

      let resposeArr = [];
      self.uploaderGallery.uploadAll();
      self.uploaderGallery.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        resposeArr.push(response);
      };
      self.uploaderGallery.onCompleteAll = () => {
        resolve({ status: 200, data: resposeArr });
      }
      self.uploaderGallery.onErrorItem = (item: any, response: any, status: any, headers: any) => {
        reject({ status: 400, message: "some error occured" });
      };

    });
  }

  uploadProductImageFiles() {

    let self = this;
    return new Promise(function (resolve, reject) {

      if (self.uploaderProfileImage.queue.length == 0)
        resolve({ status: 404, data: [] });

      let resposeArr = [];
      self.uploaderProfileImage.uploadAll();
      self.uploaderProfileImage.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        resposeArr.push(response);
      };
      self.uploaderProfileImage.onCompleteAll = () => {
        resolve({ status: 200, data: resposeArr });
      }
      self.uploaderProfileImage.onErrorItem = (item: any, response: any, status: any, headers: any) => {
        reject({ status: 400, message: "some error occured" });
      };

    });
  }

  uploadDocumentFiles() {

    let self = this;
    return new Promise(function (resolve, reject) {

      if (self.uploaderDocuments.queue.length == 0)
        resolve({ status: 200, data: [] });

      let resposeArr = [];
      self.uploaderDocuments.uploadAll();
      self.uploaderDocuments.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        resposeArr.push(response);
      };
      self.uploaderDocuments.onCompleteAll = () => {
        resolve({ status: 200, data: resposeArr });
      }
      self.uploaderDocuments.onErrorItem = (item: any, response: any, status: any, headers: any) => {
        reject({ status: 400, message: "some error occured" });
      };

    });
  }

  onChange(event) {
    console.log(event[0]);
    this._pgServices.getProductSubGroupsListByid(event[0]).subscribe(result => {
      this.groupSelected = true;
      this.myGroupOptions = result.map(function (shelflife) {
        return { id: shelflife.SubGroupId, name: shelflife.SubGroup }
      });
    });
  }

  onChangeSubGroup(event) {
    this._pgServices.getProductCategoryListByid(event[0]).subscribe(result => {
      this.subGroupSelected = true;
      this.myCategoryOptions = result.map(function (shelflife) {
        return { id: shelflife.CategoryId, name: shelflife.CategoryName }
      });
    });
  }

  onChangeCategoryOptions(event) {
    this._pgServices.getProductSubCategoryListsById(event[0]).subscribe(result => {
      this.categorySelected = true;
      this.myProductSubCategory = result.map(function (shelflife) {
        return { id: shelflife.SubCategoryId, name: shelflife.SubCategory }
      });
    });
  }


  getProductGroupList() {
    this._pgServices.getProductGroupsList().subscribe(result => {
      this.myOptions = result.map(function (shelflife) {
        return { id: shelflife.GroupId, name: shelflife.Group }
      });

    });
  }


  getProductDetails(id: Number) {
    this._pmService.getProductDetails(id).subscribe(result => {
      debugger;
      let Productresult = result[0][0];
      if (Productresult.Tags)
        Productresult.Tags = Productresult.Tags.split(',');

      this.productreg.patchValue(Productresult);
      this.groupSelected = true;
      this.subGroupSelected = true;
      this.categorySelected = true;

      this.onChange([Productresult.GroupId]);
      this.onChangeSubGroup([Productresult.SubGroupId]);
      this.onChangeCategoryOptions([Productresult.CategoryId]);

      this.existingDocuments = result[1].filter(function (item) {
        return item.DocType == "Document";
      });

      this.existingGallery = result[1].filter(function (item) {
        return item.DocType == "Image";
      });

      this.buttonText = "Update Draft";
      console.log("*******result", result[0]);
    });
  }

  deleteFromList(list, name) {
    debugger;
    if (list == "gallery")
      this.uploaderGallery.removeFromQueue(name);
    else
      this.uploaderDocuments.removeFromQueue(name);
  }

  updateExistingGalleryList(list, name) {
    if (list == "gallery") {

      this.existingGallery = this.existingGallery.filter(function(item){
        console.log(item.DocName, name.DocName);
        return item.DocName != name.DocName;
      });
      
    } else {

      this.existingDocuments = this.existingDocuments.filter(function(item){
        return item.DocName != name.DocName;
      });
    }

    this._pmService.deleteExisitingImageDoc(name.Id).subscribe(result =>{
      this._notificationService.error(
        'Deleted Successfully',
        'Image/Document deleted successfully',
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: true,
          maxLength: 100
        });

    });

  }
}
