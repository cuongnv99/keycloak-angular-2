import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CustomerInfoComponent} from "./customer-info/customer-info.component";

const routes: Routes = [
  {
    path: 'customer-info',
    component: CustomerInfoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CrmRoutingModule {}
