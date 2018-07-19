import { Component } from "@angular/core";
import {
  RemoteData,
  notAsked,
  loading,
  success,
  error
} from "@abadi199/remotedata";

@Component({
  selector: "app-root",
  template: `
  <rd-remotedata [remoteData]="this.data">
    <rd-loading><p>Loading...</p></rd-loading>
    <rd-success>{{this.data.value}}</rd-success>
    <rd-error>
      <div style="color:red">
        {{this.data.error}}
      </div>
    </rd-error>
  </rd-remotedata>
  `,
  styles: []
})
export class AppComponent {
  data: RemoteData<string, string> = loading(success("Hello World"));
}
