class AddressBook
{
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

    // getter and setter method
    get firstName() {return this._firstName;}
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name is Incorrect!';
    }
    get lastName() {return this._lastName;}
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name is Incorrect!';
    }
    get address() {return this._address;}
    set address(address) {
        let addressRegex = RegExp('^([A-z]{1}[a-z]{3,})( [A-z]{1}[a-z]{3,})?$');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect!';
    }
    get city() {return this._city;}
    set city(city) {
        let cityRegex = RegExp('^([A-z]{1}[a-z]{3,})( [A-z]{1}[a-z]{3,})?$');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City is Incorrect!';
    }
    get state() {return this._state;}
    set state(state) {
        let stateRegex = RegExp('^([A-z]{1}[a-z]{3,})( [A-z]{1}[a-z]{3,})?$');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State is Incorrect!';
    }
    get zip() {return this._zip;}
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip Code is Incorrect!';
    }
    get phoneNumber() {return this._phoneNumber;}
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('([+][0-9]{2}[ ])?[1-9]{1}[0-9]{9}');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number is Incorrect!';
    }
    get email() {return this._email;}
    set email(email) {
        //let emailRegex = RegExp('(([a-z A-Z]{3,})([-+_.]?[0-9 a-z A-Z]{3,})@([0-9 a-z]{1,})[.][a-z]{2,3}([.][a-z]{2,3})?)');
        let emailRegex = RegExp('(([a-z A-Z]{3,})([.|+|_|-]?[0-9 a-z A-Z]{3,})?@([0-9 a-z A-Z]{1,})([.][a-z]{2,3})([.][a-z]{2,3})?)');
        //let emailIdRegex = RegExp('(([a-z A-Z]{3,})?([.][a-z A-Z]{3,})@(bridgelabz)[.](co)?([.][a-z]{2}))');
        if(emailRegex.test(email))
            this._email = email;
        else throw 'Email is Incorrect!';
    }

    // method
    toString()
    {
        return "First Name:: " + this.firstName + "\nLast Name:: " + this.lastName +
        "\nAddress:: " + this.address + "\nCity:: " + this.city + "\nState:: " + this.state +
        "\nZip:: " + this.zip + "\nPhone Number:: " + this.phoneNumber + "\nEmail:: " + this.email;
    }
}

let addressBook = new AddressBook("Arafath", "Baig", "Kopurivari Palem", "Repalle", "Andhra Pradesh", 
                                    "522 262", "+91 7986331895", "arafathbaig1997@gmail.com.in");
console.log(addressBook.toString());