import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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

import { CategoriesService } from './categories.service';
import { ProfessionalsService } from './professionals.service';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { AllCategoriesDetailComponent } from './all-categories-detail/all-categories-detail.component';

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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    NoopAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    CategoriesService,
    ProfessionalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
