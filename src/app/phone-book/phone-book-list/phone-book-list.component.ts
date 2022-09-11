import { Component, OnInit } from '@angular/core';
import { PhoneBook } from '../phone-book.model';
import { PhoneBookService } from '../phone-book.service';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css']
})
export class PhoneBookListComponent implements OnInit {
  
  loadedBook: PhoneBook[] = [];
  
constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit(): void {
    this.loadedBook = this.phoneBookService.fetchPhoneBook();
  }

}
