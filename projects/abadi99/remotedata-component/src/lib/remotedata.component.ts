import { Component, OnInit, Input } from "@angular/core";
import { RemoteData, notAsked } from "@abadi199/remotedata";

@Component({
  selector: "rd-remotedata",
  template: `
  <ng-content *ngIf="this.remoteData.isNotAsked()" select="rd-not-asked"></ng-content>
  <ng-content *ngIf="this.remoteData.isLoading()" select="rd-loading"></ng-content>
  <ng-content *ngIf="this.remoteData.hasData()" select="rd-success"></ng-content>
  <ng-content *ngIf="this.remoteData.hasError()" select="rd-error"></ng-content>
  `,
  styles: []
})
export class RemoteDataComponent<T, E> implements OnInit {
  @Input() remoteData: RemoteData<T, E> = notAsked();
  constructor() {}

  ngOnInit() {}
}
