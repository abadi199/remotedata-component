import { Component, OnInit } from "@angular/core";

@Component({
  selector: "rd-error",
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
