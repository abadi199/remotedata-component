import { NgModule } from "@angular/core";
import { RemoteDataComponent } from "./remotedata.component";
import { CommonModule } from "@angular/common";
import { NotAskedComponent } from "./remotedata-not-asked/remotedata-not-asked.component";
import { LoadingComponent } from "./remotedata-loading/remotedata-loading.component";
import { SuccessComponent } from "./remotedata-success/remotedata-success.component";
import { ErrorComponent } from "./remotedata-error/remotedata-error.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    RemoteDataComponent,
    NotAskedComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent
  ],
  exports: [
    RemoteDataComponent,
    NotAskedComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent
  ]
})
export class RemoteDataModule {}
