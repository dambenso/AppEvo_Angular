import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { ProgressRESTService } from "../data.service";
import { Observable } from "rxjs";

import {
  GridComponent,
  GridDataResult,
  SelectAllCheckboxState,
  DataStateChangeEvent,
  Skip,
  RowArgs,
  PageChangeEvent
} from "@progress/kendo-angular-grid";
import { NgForm } from "@angular/forms";

@Component({
  selector: "customergrid",
  templateUrl: "./customergrid.component.html",
  styleUrls: ["./customergrid.component.scss"]
})
export class CustomerGridComponent implements OnInit {
  PDS$: Object;
  public CUSTD$: Object;
  errorMessage: string;
  Title = "CustomerGrid";
  public gridData: GridDataResult;

  constructor(private data: ProgressRESTService, private router: Router) {}

  ngOnInit() {
    this.data.getCustomersData().subscribe(
      data => {
        this.PDS$ = data;
        this.CUSTD$ = [];
        this.CUSTD$ = this.PDS$["DSBODY"].ttCustomer;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
