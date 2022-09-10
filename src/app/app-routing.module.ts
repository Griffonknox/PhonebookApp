import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'phonebook', component: PhoneBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
