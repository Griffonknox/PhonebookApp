export class PhoneBook {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    details: string;

    constructor(firstName: string, lastName: string, phone: string, address: string, details: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.details = details;
    }
}