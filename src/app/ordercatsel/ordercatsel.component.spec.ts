import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrderCatSelComponent } from "./ordercatsel.component";

describe("AppEvoTitleComponent", () => {
  let component: OrderCatSelComponent;
  let fixture: ComponentFixture<OrderCatSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCatSelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCatSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
