import { Injectable } from "@angular/core"
import { Subject } from "rxjs";
import { PhoneBook } from "./phone-book.model"

@Injectable({
    providedIn: 'root'
})

export class PhoneBookService {

    phBookChanged = new Subject<{[id: number]: PhoneBook}>();
    phBookEdited = new Subject<number>();

    filterType: string = "";
    filterName: string = "";

    phBookModal = new Subject<string>();
    phModalIndex!: number;

    editIndex!: number;

    
    phBook: {[id: number]: PhoneBook} = {
        1: new PhoneBook("Scott", "Thompson", "956-451-6159", "1749 E 14th Pl", "Tulsa", "Oklahoma", "74104", "Owner and Builder of App."),
        2: new PhoneBook("Bill", "Stevens", "314-945-8796", "3301 Armour St.", "St. Louis", "Missouri", "63028", "Met at D@D."),
        3: new PhoneBook("Jessica", "Meyers", "180-466-9987", "773 Detroit Blvd.", "McAllen", "Texas", "84665", "Taekwondo specialist from Trivia."),
        4: new PhoneBook("Bethany", "Demitri", "816-468-7945", "1928 Harvard", "Tulsa", "Oklahoma", "74104", "I guess this person is someone that I need to think of is a good reason to add to this app?"),
        5: new PhoneBook("Sebastion", "McIntosh", "664-789-1664", "3912 Ickoris Dr.", "Kareoki", "Wyoming", "79468", "Astronomy Convention in Hawaii; wore a dop ass tie."),
        6: new PhoneBook("Carl", "Jeffries", "314-468-4687", "1172 Grok St.", "Festus", "Missouri", "63114", "Lost Ark, the Scrapper that was rank 1400 something.")
    }

    filter(obj: any) {
        //Filter the jason object here
        return {1: this.phBook[1]}
    }

    fetchPhoneBook() {
        let phBook = this.phBook;

        if (this.filterName) {
           phBook = this.filter(phBook);
        }
        //alphabetize display here
        // this.sort(this.phBook);
        return phBook;
    }


    addPhoneBook(newphBook: PhoneBook) {
        let lastKey: string = Object.keys(this.phBook)[Object.keys(this.phBook).length -1]
        this.phBook[+lastKey + 1] = newphBook;
        this.phBookChanged.next(this.fetchPhoneBook());
    }

    getphBook(index: number) {
        return this.phBook[index];
    }


    deletephBook(index: number) {
        delete this.phBook[index];
        this.phBookChanged.next(this.fetchPhoneBook())
    }


    editphBook(phBook: PhoneBook, index: number) {
        this.phBook[index] = phBook;
        this.phBookChanged.next(this.fetchPhoneBook());
    }

    // private sort(obj: {[id: number]: PhoneBook}) {
    //     let sortable = Object.keys(obj);
    //     let exp {}
    //     console.log("testsortable");
    //     console.log(sortable);
    //     let exp: {};
    // }


}