"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
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
//const db  = require('../models'); this may require module.exports somewhere else
class register {
    constructor() {
        // class to handle login validation and authentication
        this.nameCategory = document.forms["names"];
        this.name = this.nameCategory['fname'].value + ' ' + this.nameCategory['lname'].value;
        this.dob = this.nameCategory['dob'].value;
        this.username = this.nameCategory['user'].value;
        this.password = bcrypt.hash(this.nameCategory['password'].value, 10); // use bcrypt.compare('password', 10, function())
        this.email = this.nameCategory['email'].value;
        this.familiar = document.forms["familiar"];
        this.country = this.familiar['country'].value;
        this.address = this.familiar['address'].value;
        this.state = this.familiar['state'].value;
        this.city = this.familiar['city'].value;
        this.zip = this.familiar['zip'].value;
        this.phone = this.familiar['phone'].value;
        this.card = document.forms["card"];
        this.noc = this.card['noc'].value; //name on card
        this.cardNo = this.card['cardNo'].value;
        this.ccv = this.card['ccv'].value;
        this.cardExp = this.card['exp-date'].value;
        this.billing = this.card['billing'].value;
        this.consent = this.card['consent'].value;
        this.style = document.forms["style"];
        this.userStyle = this.style.value;
    }
    // throw error if field is not filled out. Throw success if it is
    fillCheck() {
    }
    // throws error if password does not match confirm password
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
        if (18 > 2018 - this.dob.getFullYear()) {
            return false;
        }
    }
    //throws error if email is already in db
    emailCheck() {
    }
    //throws error if username is in db
    userCheck() {
    }
    // throw sucess everytime a field is filled 
    success() {
        this.nameCategory['fname'] === "" ? this.nameCategory['fname'].classList.add("uk-form-danger") : this.nameCategory['fname'].classList.add("uk-form-success");
        this.nameCategory['lname'] === "" ? this.nameCategory['lname'].classList.add("uk-form-danger") : this.nameCategory['lname'].classList.add("uk-form-success");
        this.dob === null ? this.nameCategory['dob'].classList.add("uk-form-danger") : this.nameCategory['dob'].classList.add("uk-form-success");
        this.username === "" ? this.nameCategory['user'].classList.add('uk-form-danger') : this.nameCategory['user'].classList.add("uk-form-success");
        this.email === "" ? this.nameCategory['email'].classList.add("uk-form-danger") : this.nameCategory['email'].classList.add("uk-form-success");
        util_1.isNull(this.password) ? this.nameCategory['password'].classList.add("uk-form-danger") : this.nameCategory['password'].classList.add("uk-form-success");
        this.country === "" ? this.familiar['country'].classList.add("uk-form-danger") : this.familiar['country'].classList.add("uk-form-success");
        this.address === "" ? this.familiar['address'].classList.add("uk-form-danger") : this.familiar['address'].classList.add("uk-form-success");
        this.state === "" ? this.familiar['state'].classList.add("uk-form-danger") : this.familiar['state'].classList.add("uk-form-success");
        this.city === "" ? this.familiar['city'].classList.add("uk-form-danger") : this.familiar['city'].classList.add("uk-form-success");
        util_1.isNull(this.zip) || isNaN(this.zip) ? this.familiar['zip'].classList.add("uk-form-danger") : this.familiar['zip'].classList.add("uk-form-success");
        this.noc === "" ? this.card['noc'].classList.add("uk-form-danger") : this.card['noc'].classList.add("uk-form-success");
        util_1.isNull(this.cardNo) && isNaN(this.cardNo) || isNaN(this.cardNo) ? this.card['cardNo'].classList.add("uk-form-danger") : this.card['cardNo'].classList.add("uk-form-success");
        isNaN(this.ccv) || util_1.isNull(this.ccv) ? this.card['ccv'].classList.add("uk-form-danger") : this.card['ccv'].classList.add("uk-form-success");
        this.cardExp === "" ? this.card['cardExp'].classList.add("uk-form-danger") : this.card['cardExp'].classList.add("uk-form-success");
        this.billing === "" ? this.card['billing'].classList.add("uk-form-danger") : this.card['billing'].classList.add("uk-form-success");
        util_1.isNull(this.userStyle) ? this.style.appendChild(this.style.createElement('p').classList.add('uk-text-danger').innerHTML = 'Please Select an option') : this.style.classList.add("uk-form-success");
    }
    //throw failure if feild has an error or is not filled
    validate() {
        this.fillCheck() ? document.querySelectorAll("form").setAttribute("novalidate") : document.querySelectorAll('form').setAttribute("validate");
    }
    //autopopulate country
    Country() {
        /*return document.getElementById("countries").appendChild(
            `<datalist id="countries>
                <option value="Albania">
                <option value= "Algeria">
                <option value= "Morrocco">
                <option value= "China">
                <option value= "Russia">
                <option value= "United States">
                <option value= "Ukraine">
                <option value= "Nigeria">
                <option value="Ivory Coast"
            <datalist>`
        );*/
        const datalist = document.createElement('datalist').innerHTML = ` <option value="Albania">
            <option value = "Algeria">
            <option value= "Morrocco">
            <option value= "China">
            <option value= "Russia">
            <option value= "United States">`;
        return document.getElementById('countries').append(datalist);
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
window.onload = () => {
    const implement = new register;
    implement.Country();
    implement.passwordCheck();
};
//# sourceMappingURL=reg.js.map