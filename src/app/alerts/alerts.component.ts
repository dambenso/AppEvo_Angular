import { Component, OnInit } from "@angular/core";

import { AlertService, AuthenticationService } from "../_services/index";

@Component({
  selector: "alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"]
})
export class AlertsComponent {
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
