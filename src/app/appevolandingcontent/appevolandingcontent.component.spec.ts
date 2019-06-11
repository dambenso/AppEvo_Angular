import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppEvoLandingContentComponent } from "./appevolandingcontent.component";

describe("AppEvoTitleComponent", () => {
  let component: AppEvoLandingContentComponent;
  let fixture: ComponentFixture<AppEvoLandingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppEvoLandingContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEvoLandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
