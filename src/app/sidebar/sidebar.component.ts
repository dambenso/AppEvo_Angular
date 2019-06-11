import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  currentUrl: string;
  isCollapsed: boolean = false;

  @Output()
  onToggleMenu = new EventEmitter();

  @Output()
  public bcrumbOutput = new EventEmitter();

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => (this.currentUrl = _.url));
  }

  ngOnInit() {}

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.onToggleMenu.emit();
  }

  alertBC(thisMenuItem): void {
    this.bcrumbOutput.emit({ thisMenuItem: thisMenuItem });
  }
}
