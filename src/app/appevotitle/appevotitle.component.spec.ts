import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppEvoTitleComponent } from "./appevotitle.component";

describe("AppEvoTitleComponent", () => {
  let component: AppEvoTitleComponent;
  let fixture: ComponentFixture<AppEvoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppEvoTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEvoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
