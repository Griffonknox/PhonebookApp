import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { PhoneBookEditComponent } from './phone-book/phone-book-edit/phone-book-edit.component';
import { PhoneBookListComponent } from './phone-book/phone-book-list/phone-book-list.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PhoneBookComponent,
    PhoneBookEditComponent,
    PhoneBookListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
