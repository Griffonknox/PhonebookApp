import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-book-edit',
  templateUrl: './phone-book-edit.component.html',
  styleUrls: ['./phone-book-edit.component.css']
})
export class PhoneBookEditComponent implements OnInit {

  PhBookForm: FormGroup;

  constructor() {
    this.PhBookForm = new FormGroup({});
   }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.PhBookForm.value);
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
