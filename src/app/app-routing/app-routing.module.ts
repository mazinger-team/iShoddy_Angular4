import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoverPageComponent } from "./../cover-page/cover-page.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: CoverPageComponent
//        resolve: {
//           articles: ArticlesResolveService
//         }
      },
      {
        path: "**",
        redirectTo: "/articles"
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
