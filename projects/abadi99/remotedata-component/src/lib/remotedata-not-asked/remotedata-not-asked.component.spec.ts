/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { NotAskedComponent } from "./remotedata-not-asked.component";

describe("RemotedataNotAskedComponent", () => {
  let component: NotAskedComponent;
  let fixture: ComponentFixture<NotAskedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotAskedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
