import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from "./app-routing/app-routing.module";

import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProfessionalsListComponent } from './professionals-list/professionals-list.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { ProfessionalItemComponent } from './professional-item/professional-item.component';

import { CategoriesService } from './services/categories/categories.service';
import { ProfessionalsService } from './services/professionals/professionals.service';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { AllCategoriesDetailComponent } from './all-categories-detail/all-categories-detail.component';

import { RegistryUserComponent } from './registry/user-registry.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { PublicAreaComponent } from './public-area/public-area.component';
import { UserService } from './services/user/user-services';
import { RequestWrapperService } from './services/common/request-wrapper.services';
import { LoginDashboardComponent } from './dashboard/login/login-dashboard.component';
import { WelcomeDashBoardComponent } from './dashboard/welcome/welcome-dashboard.component';
import { DemandasDashBoardComponent } from './dashboard/demands/demandas-dashboard.component';
import { AuthService} from './services/authorization/authorization-service';
import { CanActivateViaAuthGuard } from './services/authorization/authorization-guard';

import { ProfessionalDetailComponent } from './professional-detail/professional-detail.component';

import { AgmCoreModule } from '@agm/core';
import { ScoreCardComponent } from './score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    PageMenuComponent,
    CategoriesListComponent,
    ProfessionalsListComponent,
    AllCategoriesComponent,
    CategoryItemComponent,
    ProfessionalItemComponent,
    CoverPageComponent,
    AllCategoriesDetailComponent,
    RegistryUserComponent,
    PublicAreaComponent,
    LoginDashboardComponent,
    DashBoardComponent,
    WelcomeDashBoardComponent,
    DemandasDashBoardComponent,
    ProfessionalDetailComponent,
    ScoreCardComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    NoopAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbb-s1UDI_g9IJUzObN-DQE7qDehtOPpg	'
    }),
    NgbModule.forRoot(),
  ],
  providers: [
    CategoriesService,
    ProfessionalsService,
    UserService,
    RequestWrapperService,
    AuthService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
