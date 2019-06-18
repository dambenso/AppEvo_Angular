import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { ProgressRESTService } from "../data.service";
import { groupBy, GroupResult } from "@progress/kendo-data-query";

@Component({
  selector: "ordercatsel",
  templateUrl: "./ordercatsel.component.html",
  styleUrls: ["./ordercatsel.component.scss"]
})
export class OrderCatSelComponent implements OnInit {
  ITM$: Object;
  public ITD$: Object;
  errorMessage: string;
  public pcategories: any[] | GroupResult[];
  public scategories: any[] | GroupResult[];
  public convd: any[] = [];

  constructor(private data: ProgressRESTService, private router: Router) {}
  ngOnInit() {
    this.data.allItemData_sansImage().subscribe(
      data => {
        this.ITM$ = data;
        this.ITD$ = [];
        this.ITD$ = this.ITM$["dsItem"].ttItem;
        this.convd = JSON.parse(JSON.stringify(this.ITD$));
        this.pcategories = groupBy(this.convd, [
          { field: "Category2" },
          { field: "Category1" }
        ]);
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
function acceptClick(ctype) {}
