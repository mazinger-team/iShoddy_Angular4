import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {MdToolbarModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';

import { CategoriesService } from './categories.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    PageMenuComponent,
    CategoriesListComponent,
    AllCategoriesComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NoopAnimationsModule,
    MdToolbarModule,
    NgbModule.forRoot()
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
