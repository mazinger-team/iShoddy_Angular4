import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoverPageComponent } from "./../cover-page/cover-page.component";
import { RegistryUserComponent } from "../registry/user-registry.component";
import { DashBoardComponent}  from "../dashboard/dashboard.component";
import { LoginDashboardComponent }  from "../dashboard/login/login-dashboard.component";
import { PublicAreaComponent}  from "../public-area/public-area.component";
import { WelcomeDashBoardComponent } from "../dashboard/welcome/welcome-dashboard.component";
import { DemandasDashBoardComponent } from "../dashboard/demands/demandas-dashboard.component";
import { CanActivateViaAuthGuard } from "../services/authorization/authorization-guard"


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
        path: "publicarea",
        component: PublicAreaComponent,
        children: [{
                path: 'userregistry',component: RegistryUserComponent,outlet: 'registry'
           }
         ]

      }
      ,{
        path: "dashboard",
        component: DashBoardComponent,
        canActivate: [CanActivateViaAuthGuard],
        children: [{path: 'login', component: LoginDashboardComponent},
                    {path: 'demandas', component: DemandasDashBoardComponent, outlet: 'sub'},
                    {path: '', component: WelcomeDashBoardComponent, outlet: 'sub'},
                    {path: 'welcome', component: WelcomeDashBoardComponent, outlet: 'sub'}
        ]

      },{
        path: "login",
        component: LoginDashboardComponent,
      
      }
      
      
      ,
      {
        path: "**",
        redirectTo: "/articles"
      }
    ], { useHash: true , enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
