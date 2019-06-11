import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { CustomerGridComponent } from "./customergrid/customergrid.component";
import { CategorySelectComponent } from "./categoryselect/categoryselect.component";
import { GeneralHeaderComponent } from "./generalheader/generalheader.component";
import { AppEvoTitleComponent } from "./appevotitle/appevotitle.component";
import { OrderCatSelComponent } from "./ordercatsel/ordercatsel.component";
import { AppEvoLandingContentComponent } from "./appevolandingcontent/appevolandingcontent.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { SparklineModule } from "@progress/kendo-angular-charts";
import { MaskedTextBoxModule } from "@progress/kendo-angular-inputs";
import { MatIconModule } from "@angular/material/icon";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { AlertService, AuthenticationService } from "./_services/index";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { GridModule } from "@progress/kendo-angular-grid";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    CustomerGridComponent,
    AppEvoTitleComponent,
    CategorySelectComponent,
    AppEvoLandingContentComponent,
    GeneralHeaderComponent,
    OrderCatSelComponent,
    AlertsComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropDownsModule,
    MatIconModule,
    FormsModule,
    HttpClientJsonpModule,
    ButtonsModule,
    ChartsModule,
    SparklineModule,
    AppRoutingModule,
    MaskedTextBoxModule,
    ReactiveFormsModule,
    TooltipModule,
    GridModule
  ],
  providers: [AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
