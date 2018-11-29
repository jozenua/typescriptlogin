"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * this is to practise form validation from scratch with TS
 * this is going to be the Sign up part of the membership section for a luxury fashion brand named sqiggly
 * required feilds are name, DOB, country of origin, address, email, name on card, card no. ccv, Exp. date and password
 * other fields will be phone number, username/nickname
 * each time you move to a new part of the login process, the background changes scenes
 * at the end a new user profile should be made with a page saying the name they want displayed and their profile pic
 */
//during this project I learned that people have seperate password and regular info databases.
// use this technique when testing things with vue
const bcrypt = require('bcrypt'); // password hashing api
//const db  = require('../models'); this will require module.exports somewhere else
// class to handle login validation and authentication
class register {
    constructor() {
        this.nameCategory = document.forms.namedItem('names');
        this.name = this.nameCategory['fname'].value + ' ' + this.nameCategory['lname'].value;
        this.dob = this.nameCategory['dob'].value;
        this.username = this.nameCategory['user'].value;
        this.password = bcrypt.hash(this.nameCategory['password'].value, 10);
        this.email = this.nameCategory['email'].value;
        this.familiar = document.forms.namedItem('location');
        this.country = this.familiar['country'].value;
        this.address = this.familiar['address'].value;
        this.state = this.familiar['state'].value;
        this.city = this.familiar['city'].value;
        this.zip = this.familiar['zip'].value;
        this.phone = this.familiar['phone'].value;
        this.card = document.forms.namedItem('card');
        this.noc = this.card['noc'].value; //name on card
        this.cardNo = this.card['cardNo'].value;
        this.ccv = this.card['ccv'].value;
        this.cardExp = this.card['exp-date'].value;
        this.billing = this.card['billing'].value;
        this.consent = this.card['consent'].value;
        this.style = document.forms.namedItem('style');
        this.userStyle = this.style.value;
        this.forms = document.querySelector("form");
    }
    // red error outline on input if true, green success outline on input if false. Checking if people filled out feilds correctly
    fillCheck() {
        return this.forms.foreach(function () {
            this.forms.querySelectorAll("input[type=text][value='']") ||
                (this.forms.querySelectorAll("input[type=number][value='']") || typeof this.forms.querySelectorAll("input[type=number]").values !== "number") ||
                this.forms.querySelectorAll("input[type=date][value='']") || this.forms.querySelector("input[type=radio][value='']") ?
                this.forms.input.classList.add('uk-text-danger') && this.forms.setAttribute("novalidate", "") :
                this.forms.input.classList.add('uk-text-success') && this.forms.removeAttribute("novalidate")();
        });
    }
    // throws error if password does not match confirm password. light up the compare password feild and throw error/sucess messgaes
    passwordCheck() {
        if (this.password) {
            return bcrypt.compare(this.nameCategory['second-password'], this.password, (err, res) => {
                if (err) {
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    }
    // throws error if age is under 18
    ageCheck() {
        return 18 > 2018 - this.dob.getFullYear() ? false : true;
    }
    //throws error if email is already in db and says this email already exists
    emailCheck() {
    }
    //throws error if username is in db and says this username already exists
    userCheck() {
    }
    fail() {
    }
    //autopopulate country
    Country() {
        let array = ['United States', 'North Korea', 'South Korea', 'Japan', 'England', 'Uzbekistan', 'Canada', 'Bolivia', 'Azerbaijan'];
        const list = array.forEach(function (country) {
            const list = document.createTextNode(country);
            return document.createElement('option').appendChild(list);
        });
        const country = document.getElementById("countries").appendChild(document.createElement("datalist").appendChild(list));
        return country;
    }
    validate() {
    }
    submit() {
        //does not submit if error persists(if any of the checks throws an error then do not submit. submit info otherwise)
        // compiles info into json
        // sends you to the user page.
        const update = {
            previousid: -1,
            id: () => update.previousid += 1,
        };
        const thisUser = {
            userNo: update.id(), name: this.name, dob: this.dob, country: this.country, address: this.address, email: this.email, noc: this.noc,
            cardNo: this.cardNo, ccv: this.ccv, cardExp: this.cardExp, phone: this.phone, username: this.username,
            password: this.password
        };
        update.previousid = thisUser.userNo; // at the end of the day this will call from the database id
        let newUser = JSON.stringify(thisUser);
        return fetch('../user.html');
    }
}
window.onload = () => {
    const implement = new register;
    implement.Country;
    implement.passwordCheck;
};
//# sourceMappingURL=reg.js.map