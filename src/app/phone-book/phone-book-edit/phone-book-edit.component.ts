import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneBook } from '../phone-book.model';
import { PhoneBookService } from '../phone-book.service';

@Component({
  selector: 'app-phone-book-edit',
  templateUrl: './phone-book-edit.component.html',
  styleUrls: ['./phone-book-edit.component.css']
})
export class PhoneBookEditComponent implements OnInit {

  PhBookForm: FormGroup;

  constructor(private phoneBookService: PhoneBookService) {
    this.PhBookForm = new FormGroup({});
   }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let firstName = this.PhBookForm.value.firstName;
    let lastName = this.PhBookForm.value.lastName;
    let phone = this.PhBookForm.value.phone;
    let addres = this.PhBookForm.value.addres;
    let details = this.PhBookForm.value.details;
    let newPhoneBook = new PhoneBook(firstName, lastName, phone, addres, details);
    this.phoneBookService.addPhoneBook(newPhoneBook);
    this.PhBookForm.reset();
  }


  private initForm() {
    this.PhBookForm = new FormGroup({
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "phone": new FormControl("", Validators.required),
      "address": new FormControl("", Validators.required),
      "details": new FormControl("", Validators.required)
    });
  }

}
