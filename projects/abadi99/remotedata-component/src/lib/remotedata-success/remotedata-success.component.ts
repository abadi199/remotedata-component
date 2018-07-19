import { Component, OnInit } from "@angular/core";

@Component({
  selector: "rd-success",
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class SuccessComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
