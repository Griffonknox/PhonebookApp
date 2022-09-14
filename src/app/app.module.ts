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
import { PhoneBookDetailsComponent } from './phone-book/phone-book-list/phone-book-details/phone-book-details.component';
import { PhoneBookFilterComponent } from './phone-book/phone-book-list/phone-book-filter/phone-book-filter.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PhoneBookComponent,
    PhoneBookEditComponent,
    PhoneBookListComponent,
    HomeComponent,
    PhoneBookDetailsComponent,
    PhoneBookFilterComponent,
    DropdownDirective
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
