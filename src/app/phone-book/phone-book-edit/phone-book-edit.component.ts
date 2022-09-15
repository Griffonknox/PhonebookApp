import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneBook } from '../phone-book.model';
import { PhoneBookService } from '../phone-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phone-book-edit',
  templateUrl: './phone-book-edit.component.html',
  styleUrls: ['./phone-book-edit.component.css']
})
export class PhoneBookEditComponent implements OnInit, OnDestroy {
  PhBookForm: FormGroup;
  editMode = false;
  editedItemIndex: number = 0;
  subscription!: Subscription;

  constructor(private phoneBookService: PhoneBookService) {
    this.PhBookForm = new FormGroup({});
   }

  ngOnInit(): void {
    this.subscription = this.phoneBookService.phBookEdited
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.initForm();
        });
      this.initForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    let firstName = this.PhBookForm.value.firstName;
    let lastName = this.PhBookForm.value.lastName;
    let phone = this.PhBookForm.value.phone;
    let address = this.PhBookForm.value.address;
    let city = this.PhBookForm.value.city;
    let state = this.PhBookForm.value.state;
    let zip = this.PhBookForm.value.zip;
    let details = this.PhBookForm.value.details;
    let newPhoneBook = new PhoneBook(firstName, lastName, phone, address, city, state, zip, details);
    if (this.editMode) {
      this.phoneBookService.editphBook(newPhoneBook, this.editedItemIndex)
    } else {
      this.phoneBookService.addPhoneBook(newPhoneBook);
    }
  
    this.onReset();
  }


  private initForm() {
    let firstName = "";
    let lastName = "";
    let phone = "";
    let address = "";
    let city = "";
    let state = "";
    let zip = "";
    let details = "";

    if (this.editMode) {
      const phBook = this.phoneBookService.getphBook(this.editedItemIndex);
      firstName = phBook.firstName;
      lastName = phBook.lastName;
      phone = phBook.phone;
      address = phBook.address;
      city = phBook.city;
      state = phBook.state;
      zip = phBook.zip;
      details = phBook.details;
    }
    this.PhBookForm = new FormGroup({
      "firstName": new FormControl(firstName, Validators.required),
      "lastName": new FormControl(lastName, Validators.required),
      "phone": new FormControl(phone, Validators.required),
      "address": new FormControl(address),
      "city": new FormControl(city),
      "state": new FormControl(state),
      "zip": new FormControl(zip),
      "details": new FormControl(details)
    });
  }


  onReset() {
    this.PhBookForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.phoneBookService.deletephBook(this.editedItemIndex);
    this.onReset();
  }

}
