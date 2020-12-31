import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PersonAddComponent } from './person/person-add/person-add.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonUpdateComponent } from './person/person-update/person-update.component';
import { PersonListComponent } from './person/personList/personList.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonDetailsComponent,
    PersonUpdateComponent,
    PersonListComponent,
    OrderComponent,
    ProductComponent,
    HomeComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
