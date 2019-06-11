import { Component, OnInit } from "@angular/core";

@Component({
  selector: "appevolandingcontent",
  templateUrl: "./appevolandingcontent.component.html",
  styleUrls: ["./appevolandingcontent.component.scss"]
})
export class AppEvoLandingContentComponent implements OnInit {
  dpickup: boolean = false;
  ddelivery: boolean = false;
  ngOnInit() {}
  onButtonClick() {}
  testSib(pmode) {
    if (pmode == "p" && this.dpickup == true) {
      this.ddelivery = false;
    }
    if (pmode == "d" && this.ddelivery == true) {
      this.dpickup = false;
    }
  }
}
