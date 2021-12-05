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
    console.log(" ");
    console.log(contact1.toString());
    console.log(" ");
    console.log(contact2.toString());
    addressBookArray.push(contact1);
    addressBookArray.push(contact2);

} catch(e) {
    console.log(" ");
    console.error(e);
}

console.log(" ");
for(let i=0;i<addressBookArray.length;i++){
    console.log(addressBookArray[i]);
    console.log(" ");
}

const prompt = require('prompt-sync')();

// Edit Contact Function
let findContact=(firstname, lastname) => 
{
    let contactToEdit;
    for (let i = 0; i < addressBookArray.length; i++) 
    {
        if (addressBookArray[i].firstName === firstname && addressBookArray[i].lastName === lastname)
            contactToEdit = addressBookArray[i]
    }

    if (contactToEdit == null)
        console.log("No Contact Found To Edit\n")
    else {
        console.log("\n0. Exit \n1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
        console.log("6. Edit ZipCode \n7. Edit Phone Number \n8. Edit Email")
        let input = prompt("\nEnter Your Choice:  ")
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
            input = prompt("\nEnter Your Choice:  ")
            input = parseInt(input)
        }
        console.log("\nProgram Exited!");
    }
}

// Delete Contact Function
let deleteContact = (firstname, lastname) =>
{
    for (let i = 0; i < addressBookArray.length; i++) 
    {
        if (addressBookArray[i].firstName == firstname && addressBookArray[i].lastName == lastname)
        {
            contactToDelete = addressBookArray[i];
            console.log("\nDeleting Contact:: "+contactToDelete);
            console.log("\nDelte running");
            addressBookArray.splice(i,1);
        }
        else
        {
            console.log("Contact Not Found.");
        }
    }
}

// Count Function
let numberOfContact = () =>
{
    console.log("Number of contact is ")
    console.log(addressBookArray.length);
}

// Check Duplicate Contact Before Adding Function
let addContact = (firstName, lastName, address, city, state, zip, phoneNumber, email) =>
{
    if(addressBookArray.some(contacts=>contacts.firstName==firstName) && 
        addressBookArray.some(contacts=>contacts.lastName==lastName))
    {
        console.log("\nContact already exists");
    }
    else
    {
        addressBookArray.push(new Contacts(firstName, lastName, address, city, state, zip, phoneNumber, email));
        console.log("\nContact Added!");
    }
}

// Search By City Function
let searchByCity = (searchCity) =>
{
    let contact = addressBookArray.filter(contact => contact.city == searchCity);
    console.log(contact);
}

// Search By State Functions
let searchByState = (searchState) =>
{
    let contact = addressBookArray.filter(contact => contact.state == searchState);
    console.log(contact);
}

// Count By City Function
getCountOfContactsByCity = (city) =>
{
    let count= addressBookArray.filter((contact) => contact.city == city).length;
    console.log(count);
}

// Count By State Function
getCountOfContactsByState = (state) => 
{
    let count= addressBookArray.filter((contact) => contact.state == state).length;
    console.log(count);
}

// Sort By Name Function
let sortByName = () => 
{
    addressBookArray.sort((first, second) => (first.firstName).localeCompare(second.firstName));
    console.log(" ");
    console.log(addressBookArray.toString()+"\n");
}

// Sort By City Function
let sortByCity = () =>
{
    addressBookArray.sort((first, second) => (first.city).localeCompare(second.city));
    console.log(" ");
    console.log(addressBookArray.toString()+"\n");
}

// Sort By State Function
let sortByState = () =>
{
    addressBookArray.sort((first, second) => (first.state).localeCompare(second.state));
    console.log(" ");
    console.log(addressBookArray.toString()+"\n");
}

// Sort By Zip Function
let sortByZip = () =>
{
    addressBookArray.sort((first, second) => (first.zip).localeCompare(second.zip));
    console.log(" ");
    console.log(addressBookArray.toString()+"\n");
}

// Edit Contact
let param1 = prompt("Enter the First Name:  ");
let param2 = prompt("Enter the Last Name:  ");
findContact(param1, param2);
console.log(" ");
for (let i = 0; i < addressBookArray.length; i++) 
{
    console.log(addressBookArray[i]);
    console.log(" ");
}

// Delete Contact
param1 = prompt("Enter the First Name:  ");
param2 = prompt("Enter the Last Name:  ");
deleteContact(param1, param2);
console.log(" ");
for (let i = 0; i < addressBookArray.length; i++) 
{
    console.log(addressBookArray[i]);
    console.log(" ");
}

// Count Number of Contacts
console.log("\nContacts Count!");
numberOfContact();

// Duplicate Contact
addContact("Karimulla", "Baig", "Kopurivari Palem", "Repalle", "Andhra Pradesh", 
            "522 262", "9492083682", "arafathbhai1997@gmail.com");
addContact("Rehana", "Begum", "Kopurivari Palem", "Repalle", "Andhra Pradesh", 
            "522 262", "9492083681", "arafathbaig420@gmail.com");
console.log(" ");
for (let i = 0; i < addressBookArray.length; i++)
{
    console.log(addressBookArray[i]);
    console.log(" ");
}

// UC 8,9 Search By City or State and View
console.log("\nSearch By City!");
searchByCity("Repalle");
console.log("\nSearch By State!");
searchByState("Telangana");

// UC 10 - Count By City and By State
console.log("\nCount By City!");
getCountOfContactsByCity("Repalle");
console.log("\nCount By State!");
getCountOfContactsByState("Telangana");

// UC 11,12 - Sort Contacts By FirstName, City, State, Zip
console.log("\nSort By First Name!");
sortByName();
console.log("\nSort By City!");
sortByCity();
console.log("\nSort By State!");
sortByState();
console.log("\nSort By Zip!");
sortByZip();

