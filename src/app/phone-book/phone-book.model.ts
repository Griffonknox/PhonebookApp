export class PhoneBook {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    details: string;

    constructor(
        firstName: string, 
        lastName: string, 
        phone: string, 
        address: string,
        city: string,
        state: string,
        zip: string, 
        details: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.details = details;
    }
}