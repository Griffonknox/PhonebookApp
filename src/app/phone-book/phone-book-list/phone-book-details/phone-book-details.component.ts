import { Component, Input } from '@angular/core';
import { PhoneBook } from '../../phone-book.model';
import { PhoneBookService } from '../../phone-book.service';

@Component({
  selector: 'app-phone-book-details',
  templateUrl: './phone-book-details.component.html',
  styleUrls: ['./phone-book-details.component.css']
})
export class PhoneBookDetailsComponent {
  @Input() index!: string;
  @Input() add!: PhoneBook;

  constructor(private phoneBookService: PhoneBookService) { }

  onEdit() {
    // this.phoneBookService.phBookEdited.next(+this.index);
  }

}
