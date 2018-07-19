import { Component, OnInit } from "@angular/core";

@Component({
  selector: "rd-loading",
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
