class Contacts
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

var addressBookArray = new Array();
try {
    let contact1 = new Contacts("Arafath", "Baig", "Kopurivari Palem", "Repalle", "Andhra Pradesh", 
                                "522 262", "+91 7986331895", "arafathbaig1997@gmail.com.in");
    let contact2 = new Contacts("Karimulla", "Baig", "Kopurivari Palem", "Repalle", "Andhra Pradesh", 
                                "522 262", "9492083682", "arafathbhai1997@gmail.com");
    console.log(contact1.toString());
    console.log(contact2.toString());
    addressBookArray.push(contact1);
    addressBookArray.push(contact2);

} catch(e) {
    console.error(e);
}

for(let i=0;i<addressBookArray.length;i++){
    console.log(addressBookArray[i]);
}

const prompt = require('prompt-sync')();

let findContact=(firstname, lastname) => 
{
    let contactToEdit;
    for (let i = 0; i < addressBookArray.length; i++) 
    {
        if (addressBookArray[i].firstName === firstname && addressBookArray[i].lastName === lastname)
            contactToEdit = addressBookArray[i]
    }

    if (contactToEdit == null)
        console.log("No Contact Found To Edit")
    else {
        console.log("0. Exit \n1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
        console.log("6. Edit ZipCode \n7. Edit Phone Number \n8. Edit Email")
        let input = prompt("Enter Your Choice:  ")
        input = parseInt(input)
        while (input != 0) 
        {
            switch (input) 
            {
                case 1:
                    let firstname = prompt("Enter the first Name: ");
                    contactToEdit.firstName = firstname;
                    break;
                case 2:
                    let lastname = prompt("Enter the last Name: ");
                    contactToEdit.lastName = lastname;
                    break;
                case 3:
                    let editedAddress = prompt("Enter the address: ");
                    contactToEdit.address = editedAddress;
                    break;
                case 4:
                    let editedCity = prompt("Enter the city: ");
                    contactToEdit.city = editedCity;
                    break;
                case 5:
                    let editedState = prompt("Enter the State: ");
                    contactToEdit.state = editedState;
                    break;
                case 6:
                    let editedZip = prompt("Enter the zip: ");
                    contactToEdit.zip = editedZip;
                    break;
                case 7:
                    let editedPhoneNumber = prompt("Enter the phone number: ");
                    contactToEdit.phoneNumber = editedPhoneNumber;
                    break;
                case 8:
                    let editedEmail = prompt("Enter the email: ");
                    contactToEdit.email = editedEmail;
                    break;
                default:
                    console.log("Wrong Input");
            }
            console.log("0. Exit \n1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
            console.log("6. Edit ZipCode \n7. Edit Phone Number \n8. Edit Email")
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
        }
        console.log("Program Exited!");
    }
}

let deleteContact =(firstname, lastname)=>
{
    let contactToDelete,indexOfContact;
    for (let i = 0; i < addressBookArray.length; i++) 
    {
        if (addressBookArray[i].firstName == firstname && addressBookArray[i].lastName == lastname)
        {
            contactToDelete = addressBookArray[i];
            indexOfContact = i;
            console.log(indexOfContact);
            console.log("Delte running");
        }
    }
    if(indexOfContact!=-1)
    {
        addressBookArray.splice(indexOfContact,1);
    }
}

// Edit Contact
let param1 = prompt("Enter the First Name:  ");
let param2 = prompt("Enter the Last Name:  ");
findContact(param1, param2);
for (let i = 0; i < addressBookArray.length; i++) 
{
    console.log(addressBookArray[i]);
}

// Delete Contact
param1 = prompt("Enter the First Name:  ");
param2 = prompt("Enter the Last Name:  ");
deleteContact(param1, param2);
for (let i = 0; i < addressBookArray.length; i++) 
{
    console.log(addressBookArray[i]);
}