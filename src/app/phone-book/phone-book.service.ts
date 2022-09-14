import { Injectable } from "@angular/core"
import { Subject } from "rxjs";
import { PhoneBook } from "./phone-book.model"

@Injectable({
    providedIn: 'root'
})

export class PhoneBookService {

    phBookChanged = new Subject<PhoneBook[]>();
    phBookEdited = new Subject<number>();
    
    phBook: PhoneBook[] = [
        new PhoneBook("Scott", "Thompson", "956-451-6159", "1749 E 14th Pl", "Tulsa", "Oklahoma", "74104", "Owner and Builder of App."),
        new PhoneBook("Bill", "Stevens", "314-945-8796", "3301 Armour St.", "St. Louis", "Missouri", "63028", "Met at D@D."),
        new PhoneBook("Jessica", "Meyers", "180-466-9987", "773 Detroit Blvd.", "McAllen", "Texas", "84665", "Taekwondo specialist from Trivia.")
    ]



    fetchPhoneBook() {
        return this.phBook.slice();
    }

    addPhoneBook(phBook: PhoneBook) {
        this.phBook.push(phBook);
        this.phBookChanged.next(this.phBook.slice());
    }

    getphBook(index: number) {
        return this.phBook[index];
    }

    deletephBook(index: number) {
        this.phBook.splice(index, 1);
        this.phBookChanged.next(this.phBook.slice())
    }

    editphBook(phBook: PhoneBook, index: number) {
        this.phBook[index] = phBook;
        this.phBookChanged.next(this.phBook.slice());
    }

}