import { Component, OnInit } from '@angular/core';
import { ClientManagementService } from '../../services/client-management.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.css']
})
export class ClientTypeComponent implements OnInit {

  public clienttypes: any[];
  clientType: FormGroup;
  buttonText: String = "Create";

  constructor(private _cmService: ClientManagementService, private fb: FormBuilder) { }

  ngOnInit() {

    this.clientType = this.fb.group({
      ClientTypeId: 0,
      ClientType: ["", Validators.required],
      ClientTypeDescription: [""]
    });

    this.getClientTypeList();
  }

  getClientTypeList() {
    this._cmService.getClientTypeList().subscribe(result => {
      this.clienttypes = result;
    });
  }

  createClientType({ value, valid }) {

    if (this.buttonText === "Create") {
      this._cmService.clientTypeCreate(value).subscribe(result => {
        this.getClientTypeList();
        this.clientType.reset();
      });
    }
    else {
      this._cmService.updateClientType(value["ClientTypeId"],value).subscribe(result => {
        this.getClientTypeList();
        this.buttonText = "Create";
        this.clientType.reset();
      });
    }
  }

  editClick(obj) {
    this.clientType.patchValue(obj);
    this.buttonText = "Update";
  }

  deleteClick(id){
    this._cmService.deleteClientType(id).subscribe(result =>{
      this.getClientTypeList();
    });
  }

}
