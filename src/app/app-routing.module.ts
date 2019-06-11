import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { CustomerGridComponent } from "./customergrid/customergrid.component";
import { CategorySelectComponent } from "./categoryselect/categoryselect.component";
import { OrderCatSelComponent } from "./ordercatsel/ordercatsel.component";
import { GeneralHeaderComponent } from "./generalheader/generalheader.component";
import { SandboxComponent } from "./sandbox/sandbox.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },
  {
    path: "sandbox",
    component: SandboxComponent
  },
  {
    path: "categoryselect",
    component: CategorySelectComponent,
    children: [
      {
        path: "ordercatsel",
        component: OrderCatSelComponent
      },
      {
        path: "customergrid",
        component: CustomerGridComponent
      }
    ]
  },
  {
    path: "generalheader",
    component: GeneralHeaderComponent
  },
  {
    path: "landing",
    component: LandingComponent,
    children: []
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
