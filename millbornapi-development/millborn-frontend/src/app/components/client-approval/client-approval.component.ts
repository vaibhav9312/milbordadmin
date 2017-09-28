import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientManagementService } from '../../services/client-management.service';

@Component({
  selector: 'app-client-approval',
  templateUrl: './client-approval.component.html',
  styleUrls: ['./client-approval.component.css']
})
export class ClientApprovalComponent implements OnInit {
  clientDetails : any;
  approvalForm : FormGroup;

  constructor(private _cmService: ClientManagementService, private route: ActivatedRoute, private fb:FormBuilder) { 
    this.approvalForm = this.fb.group({
      approvalStatus : ["approved", Validators.required],
      comments : ["",Validators.required]
    })
  }

  ngOnInit() {
    let id = 0;
    this.route.params.subscribe(params => {
      id = +params["id"];
      if (!(isNaN(id))) {
        this._cmService.getClientDetails(id).subscribe(result =>{
          this.clientDetails = result[0];
        });
      }
      else{
        alert("Id is not valid");
      }
    });
  }

  doVerify({value, valid}){

  }

}
