import { Injectable } from "@angular/core"
import { PhoneBook } from "./phone-book.model"

@Injectable({
    providedIn: 'root'
})

export class PhoneBookService {

    loadedBook: PhoneBook[] = [
        new PhoneBook("Scott", "Thompson", "956-451-6159", "1749 E 14th Pl, Tulsa OK 74104", "Owner and Builder of App."),
        new PhoneBook("Bill", "Stevens", "956-451-6159", "1749 E 14th Pl, Tulsa OK 74104", "Met at D@D."),
        new PhoneBook("Jessica", "Meyers", "956-451-6159", "1749 E 14th Pl, Tulsa OK 74104", "Taekwondo specialist from Trivia."),
        new PhoneBook("Scott", "Thompson", "956-451-6159", "1749 E 14th Pl, Tulsa OK 74104", "Owner and Builder of App."),
        new PhoneBook("Bill", "Stevens", "956-451-6159", "1749 E 14th Pl, Tulsa OK 74104", "Met at D@D."),
        new PhoneBook("Jessica", "Meyers", "956-451-6159", "1749 E 14th Pl, Tulsa OK 74104", "Taekwondo specialist from Trivia."),
    ]


    fetchPhoneBook() {
        return this.loadedBook.slice();
    }

}