import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css']
})
export class PhoneBookListComponent implements OnInit {
  
  addressBook = [
    {firstName: "Test1",
    lastName: "test2",
    address: "asdflas;dkfj TX",
    details: "friend I met at D&D"},
    {firstName: "Test1",
    lastName: "test2",
    address: "asdflas;dkfj TX",
    details: "friend I met at D&D"},
    {firstName: "Test1",
    lastName: "test2",
    address: "asdflas;dkfj TX",
    details: "friend I met at D&D"},
]
  
constructor() { }

  ngOnInit(): void {
  }

}
