import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhoneBook } from '../phone-book.model';
import { PhoneBookService } from '../phone-book.service';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css']
})
export class PhoneBookListComponent implements OnInit, OnDestroy {
  
  loadedBook: PhoneBook[] = [];
  // subsription: Subscription;
  
constructor(private phoneBookService: PhoneBookService) { 

}

  ngOnInit(): void {
    this.phoneBookService.phBookChanged
      .subscribe(
        (phBooks: PhoneBook[]) => {
          this.loadedBook = phBooks;
        }
      );
    this.loadedBook = this.phoneBookService.fetchPhoneBook();
  }

  ngOnDestroy(): void {
    // this.subsription.unsubscribe();
  }

}
