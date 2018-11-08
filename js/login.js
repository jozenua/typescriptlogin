"use strict";
/**
 * this is to practise form validation from scratch with TS
 * this is going to be the Sign up part of the membership section for a luxury fashion brand named sqiggly
 * required feilds are name, DOB, country of origin, address, email, name on card, card no. ccv, Exp. date and password
 * other fields will be phone number, username/nickname
 * each time you move to a new part of the login process, the background changes scenes
 * at the end a new user profile should be made with a page saying the name they want displayed and their profile pic
 */
Object.defineProperty(exports, "__esModule", { value: true });
//during this project I learned that people have seperate password and regular info databases.
// use this technique when testing things with vue
const bcrypt = require('bcrypt'); // password hashing api
class login {
    constructor() {
        // class to handle login validation and authentication
        this.nameCategory = document.getElementById('names').elements;
        this.name = escape(this.nameCategory['fname']) + ' ' + escape(this.nameCategory['lname']);
        this.dob = escape(this.nameCategory['dob']);
        this.username = escape(this.nameCategory['user']);
        this.password = bcrypt.hash(escape(this.nameCategory['password']), 10, (err, hash) =>  /*return either true or false depending  on if info was saved to the db*/); // use bcrypt.compare('password', 10, function())
        this.email = escape(this.nameCategory['email']);
        this.familiar = document.getElementById('familiar').elements;
        this.country = escape(this.familiar['country']);
        this.address = escape(this.familiar['address']);
        this.card = document.getElementById('card').elements;
        this.noc = escape(this.card['noc']); //name on card
        this.cardNo = escape(this.card['cardNo']);
        this.ccv = escape(this.card['ccv']);
        this.cardExp = escape(this.card['exp-date']);
        this.phone = escape(this.card['phone']);
        this.style = document.getElementById('style').elements;
        this.casual = escape(this.style['casual']);
        this.sporty = escape(this.style['sporty']);
        this.edgy = escape(this.style['edgy']);
        this.formal = escape(this.style['formal']);
    }
    // throw error if field is not filled out
    fillCheck() {
    }
    // throws error if password does not match confirm password
    passwordCheck(hash) {
        hash ? bcrypt.hash(escape(this.formID['second-password']), hash, (err, hash) => ) : Error('Please enter a password');
    }
    // throws error if age is under 18
    ageCheck() {
    }
    //throws error if email is already in db
    emailCheck() {
    }
    //throws error if username is taken
    userCheck() {
    }
    // throw sucess everytime a field is filled 
    success() {
    }
    submit() {
        //does not submit if error persists(if any of the checks throws an error then do not submit. submit info otherwise)
        // compiles info into json
        // sends you to the user page.
        const thisUser = {
            name: this.name, dob: this.dob, country: this.country, address: this.address, email: this.email, noc: this.noc,
            cardNo: this.cardNo, ccv: this.ccv, cardExp: this.cardExp, phone: this.phone, username: this.username,
            password: this.password
        };
        let newUser = JSON.stringify(thisUser);
        return fetch('user.html');
    }
}
exports.login = login;
function user() {
    //gets info from login and displays all that when and where neccessary
}
//# sourceMappingURL=login.js.map