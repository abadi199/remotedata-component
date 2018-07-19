import { Component, OnInit } from "@angular/core";

@Component({
  selector: "rd-not-asked",
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class NotAskedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
