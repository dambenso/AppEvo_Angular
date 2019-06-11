import { Component, OnInit } from "@angular/core";
import { ProgressRESTService } from "../data.service";
import { AlertService } from "../_services/index";
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.component.html"
})
export class SandboxComponent implements OnInit {
  private Alarms: Array<object> = [];
  constructor(
    private OERest: ProgressRESTService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getAlarmStatus();
  }
  public getAlarmStatus() {
    this.OERest.getCustomerData(3000).subscribe((data: Array<object>) => {
      this.Alarms = data;
      console.log(data);
    });
    this.alertService.success(
      "EUREKA - this is a SUCCESS alert from the ALERT Service Provider"
    );
    //this.alertService.error(      "EUREKA - this is an ERROR from the ALERT Service Provider"    );
  }

  //  public targetList1: Array<string> = ["MSS", "Oracle", "OpendEdge"];

  public getBryansData() {}
}
