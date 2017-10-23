import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoverPageComponent } from "./../cover-page/cover-page.component";
import { RegistryUserComponent } from "../registry/user-registry.component";


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: CoverPageComponent
      },{
        path: "userregistry",
        component: RegistryUserComponent
      },
      {
        path: "**",
        redirectTo: "/articles"
      }
    ], { useHash: true , enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
