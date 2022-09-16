import { Component } from '@angular/core';
import { PhoneBookService } from '../../phone-book.service';

@Component({
  selector: 'app-phone-book-filter',
  templateUrl: './phone-book-filter.component.html',
  styleUrls: ['./phone-book-filter.component.css']
})
export class PhoneBookFilterComponent  {
  filterName: string = "";
  filterType: string = "name";


  constructor(private phoneBookService: PhoneBookService) {
  }

  onFilter(){
    this.phoneBookService.filterName = this.filterName;
    this.phoneBookService.filterType =  this.filterType;
    this.phoneBookService.phBookChanged.next(this.phoneBookService.fetchPhoneBook());
  }

}
