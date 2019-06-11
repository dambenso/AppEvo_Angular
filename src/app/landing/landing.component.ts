import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  sidebarCollapsed: boolean = false;
  ngOnInit() {}
  resizeMe() {
    const ele = document.getElementById("container");
    const elestyle = getComputedStyle(ele);
    const curGrids = elestyle["grid-template-columns"];
    // TODO:
    // Get AppSideBar element and compute width
    if (curGrids.indexOf("215px") > -1 || curGrids.indexOf("214.99px") > -1) {
      ele.setAttribute("style", "grid-template-columns: 50px auto");
      this.sidebarCollapsed = true;
    } else {
      ele.setAttribute("style", "grid-template-columns: 215px auto");
      this.sidebarCollapsed = false;
    }
  }
}
