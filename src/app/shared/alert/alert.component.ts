import { Component, Input, OnInit } from '@angular/core';
import { PhoneBook } from 'src/app/phone-book/phone-book.model';
import { PhoneBookService } from 'src/app/phone-book/phone-book.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() type: string = "";
  @Input() phBook!: PhoneBook;
  index: number = 0;

  message!: string;

  constructor(private phoneBookService: PhoneBookService) { 

  }

  ngOnInit(): void {
    if(this.type == "delete") {
      this.message = "Confirm Delete for Phonebook Item?"
    } else {
      this.message = "Confirm Edit for PhoneBook Item?"
    }

    this.index = this.phoneBookService.phModalIndex;
  }

  cancelModal() {
    this.phoneBookService.phBookModal.next("close");
  }

  onConfirm() {
    if (this.type == "delete") {
      this.phoneBookService.deletephBook(this.index);
      this.phoneBookService.phBookModal.next("delete");
    }
  }

}
