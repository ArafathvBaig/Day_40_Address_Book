class AddressBook
{
    // Property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    // Constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // method
    toString()
    {
        return "First Name:: " + this.firstName + "\nLast Name:: " + this.lastName +
        "\nAddress:: " + this.address + "\nCity:: " + this.city + "\nState:: " + this.state +
        "\nZip:: " + this.zip + "\nPhone Number:: " + this.phoneNumber + "\nEmail:: " + this.email;
    }
}

let addressBook = new AddressBook("Arafath", "Baig", "Kopurivari Palem", "Repalle", "Andhra Pradesh", "522 262", "+91 7986331895", "arafathbaig1997@gmail.com");
console.log(addressBook.toString());