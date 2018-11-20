import { isNull } from "util";

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
    // class to handle login validation and authentication
    private nameCategory: any = document.forms["names"];
    private name: string = this.nameCategory['fname'].value + ' ' + this.nameCategory['lname'].value;
    private dob: Date = this.nameCategory['dob'].value;
    private username: string = this.nameCategory['user'].value;
    private password = bcrypt.hash(this.nameCategory['password'].value, 10);      // use bcrypt.compare('password', 10, function())
    private email: string = this.nameCategory['email'].value;

    private familiar: any = document.forms["familiar"];
    private country: string = this.familiar['country'].value;
    private address: string = this.familiar['address'].value;
    private state: string = this.familiar['state'].value;
    private city: string = this.familiar['city'].value;
    private zip: number = this.familiar['zip'].value;
    private phone: number = this.familiar['phone'].value;

    private card: any = document.forms["card"];
    private noc: string = this.card['noc'].value;                   //name on card
    private cardNo: number = this.card['cardNo'].value;
    private ccv: number = this.card['ccv'].value;
    private cardExp: string = this.card['exp-date'].value;
    private billing: string = this.card['billing'].value;

    private consent: HTMLDataElement = this.card['consent'].value;


    private style: any = document.forms["style"];
    private userStyle = this.style.value;

    // throw error if field is not filled out. Throw success if it is
    fillCheck(): boolean {
             
        }

    // throws error if password does not match confirm password
    passwordCheck(): boolean {
        if (this.password) {
            return bcrypt.compare(this.nameCategory['second-password'], this.password, (err: Error, res:any) => {
                if(err) {
                    return false;
                } else {
                   return true;
                }
            });
        } 
    }

    // throws error if age is under 18
    ageCheck(): boolean {
        if(18 > 2018 - this.dob.getFullYear()) {
            return false;
        }
    }


    //throws error if email is already in db
    emailCheck(): boolean {
        
    }

    //throws error if username is in db
    userCheck(): boolean {

    }


    // throw sucess everytime a field is filled 
    success(): HTMLStyleElement {


        this.nameCategory['fname'] === "" ? this.nameCategory['fname'].classList.add("uk-form-danger") : this.nameCategory['fname'].classList.add("uk-form-success");
        this.nameCategory['lname'] === "" ? this.nameCategory['lname'].classList.add("uk-form-danger") : this.nameCategory['lname'].classList.add("uk-form-success");
        this.dob === null ? this.nameCategory['dob'].classList.add("uk-form-danger") : this.nameCategory['dob'].classList.add("uk-form-success");
        this.username === "" ? this.nameCategory['user'].classList.add('uk-form-danger') : this.nameCategory['user'].classList.add("uk-form-success");
        this.email === "" ? this.nameCategory['email'].classList.add("uk-form-danger") : this.nameCategory['email'].classList.add("uk-form-success");
        isNull(this.password) ? this.nameCategory['password'].classList.add("uk-form-danger") : this.nameCategory['password'].classList.add("uk-form-success");

        this.country === "" ? this.familiar['country'].classList.add("uk-form-danger") : this.familiar['country'].classList.add("uk-form-success");
        this.address === "" ? this.familiar['address'].classList.add("uk-form-danger") : this.familiar['address'].classList.add("uk-form-success");
        this.state === "" ? this.familiar['state'].classList.add("uk-form-danger") : this.familiar['state'].classList.add("uk-form-success");
        this.city === "" ? this.familiar['city'].classList.add("uk-form-danger") : this.familiar['city'].classList.add("uk-form-success");
        isNull(this.zip) || isNaN(this.zip) ? this.familiar['zip'].classList.add("uk-form-danger") : this.familiar['zip'].classList.add("uk-form-success");

        this.noc === "" ? this.card['noc'].classList.add("uk-form-danger") : this.card['noc'].classList.add("uk-form-success");
        isNull(this.cardNo) && isNaN(this.cardNo) || isNaN(this.cardNo) ? this.card['cardNo'].classList.add("uk-form-danger") : this.card['cardNo'].classList.add("uk-form-success");
        isNaN(this.ccv) || isNull(this.ccv) ? this.card['ccv'].classList.add("uk-form-danger") : this.card['ccv'].classList.add("uk-form-success");
        this.cardExp === "" ? this.card['cardExp'].classList.add("uk-form-danger") : this.card['cardExp'].classList.add("uk-form-success");
        this.billing === "" ? this.card['billing'].classList.add("uk-form-danger") : this.card['billing'].classList.add("uk-form-success");

        isNull(this.userStyle) ? this.style.appendChild(this.style.createElement('p').classList.add('uk-text-danger').innerHTML = 'Please Select an option') : this.style.classList.add("uk-form-success");
    }

    //throw failure if feild has an error or is not filled
    validate(): any {
        this.fillCheck() ? document.querySelectorAll("form").setAttribute("novalidate") : document.querySelectorAll('form').setAttribute("validate");
    }


    //autopopulate country
    Country(): HTMLStyleElement {
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
        }
        let newUser = JSON.stringify(thisUser);
        return fetch('user.html');

    }

}

window.onload=()=> {
    const implement = new register;
    implement.Country();
    implement.passwordCheck();
}