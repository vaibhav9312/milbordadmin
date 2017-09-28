import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientManagementService } from '../../services/client-management.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {
  clientreg: FormGroup;
  public clienttypes: any[];
  public countrylist: any[];
  public statelist: any[];
  public citylist: any[];
  public GSTNumber: string = "";
  public mainItemsList: any[];

  constructor(private fb: FormBuilder, private _cmService: ClientManagementService, private route: ActivatedRoute, private router : Router) {

    this.clientreg = this.fb.group({
      ClientId: [0],
      AddressId: [0],
      ClientTypeId: ["", Validators.required],
      FirmName: ["", Validators.required],
      OwnerName: ["", Validators.required],
      CountryId: ["", Validators.required],
      StateId: ["", Validators.required],
      CityId: ["", Validators.required],
      District: ["", Validators.required],
      HouseNumber: ["", Validators.required],
      StreetName: ["", Validators.required],
      Area: ["", Validators.required],
      Pincode: ["", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
      Landmark: ["", Validators.required],
      MobileNumber: ["", Validators.required],
      AlterNateNumber: [""],
      WhatsAppNumber: ["", Validators.required],
      Email: ["", Validators.required],
      GSTNumber: [""],
      GSTName: [""],
      GSTAddress: [""],
      MainItems: [""],
      OtherMainItem: [""]
    });

  }

  ngOnInit() {
    let id = 0;
    this.route.params.subscribe(params => {
      id = +params["id"];
      if (!(isNaN(id))) {
        this.getClientDetails(id);
      }
    });

    this._cmService.getClientTypeList().subscribe(result => {
      this.clienttypes = result;
      debugger;
      if ((isNaN(id))) {
        this.clientreg.patchValue({ ClientTypeId: 2 });
        this.getMainItemList(2);
      }
    });

    this._cmService.getCountries().subscribe(result => {
      this.countrylist = result;
      this.clientreg.patchValue({ CountryId: result[0].CountryId });
      this.getStateByCountry();
    });

    this.mainItemsList = [""];

  }

  getStateByCountry() {
    this._cmService.getStateByCountry(this.clientreg.value.CountryId).subscribe(result => {
      this.statelist = result;
      if(!this.clientreg.value.StateId)
        this.clientreg.patchValue({ StateId: result[0].StateId });
      
      this.getCityByState();
    })
  }

  getCityByState() {
    this._cmService.getCityByState(this.clientreg.value.StateId).subscribe(result => {
      this.citylist = result;
      if(!this.clientreg.value.CityId)
        this.clientreg.patchValue({ CityId: result[0].CityId });
    })
  }

  doRegister({ valid, value }) {
    let mainitemstext = this.mainItemsList.filter(function (e) {
      return value.MainItems.indexOf(e.MainItemsId) != -1;
    }).map(function (e) {
      return e.MainItemName;
    });

    let ClientType = this.clienttypes.filter(function (e) {
      return value.ClientTypeId == e.ClientTypeId;
    })[0]["ClientType"];

    value.MainItemTexts = mainitemstext;
    value.ClientType = ClientType;

    debugger;

    if (valid) {
      this._cmService.createClient(value).subscribe(result => {
        alert("registered");
        this.router.navigate(['/app/client/list']);
      });
    }
  }

  getMainItemList(id) {
    this._cmService.getMainItemListByClientType(id).subscribe(result => {
      this.mainItemsList = result;
    });
  }

  updateMainItems() {
    this.getMainItemList(this.clientreg.value.ClientTypeId);
  }

  setWhatsappNumber(field: string, event) {

    if (event.srcElement.checked) {
      let num = this.clientreg.value[field];
      this.clientreg.patchValue({ WhatsAppNumber: num });
    }

  }

  setGSTValidation() {
    if (this.clientreg.controls['GSTNumber'].value != "") {
      this.clientreg.controls['GSTName'].setValidators(Validators.required);
      this.clientreg.controls['GSTAddress'].setValidators(Validators.required);
      this.clientreg.controls['GSTName'].updateValueAndValidity();
      this.clientreg.controls['GSTAddress'].updateValueAndValidity();
    }
    else {
      this.clientreg.controls['GSTName'].clearValidators();
      this.clientreg.controls['GSTAddress'].clearValidators();
    }
  }

  getClientDetails(id: Number) {
    this._cmService.getClientDetails(id).subscribe(result => {
      result = result[0];
      result.MainItems = result.MainItemIds.split(',').map(Number);
      result.PlotNumber = result.HouseNumber;
      this.clientreg.patchValue(result);
      this.getMainItemList(result.ClientTypeId);
      this.getStateByCountry();
    });
  }

}
