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
//const db  = require('../models');

export class register {
    // class to handle login validation and authentication
    private nameCategory: any = document.getElementById('names').elements;
    private name: string = this.nameCategory['fname'] + ' ' + this.nameCategory['lname'];
    private dob: Date = this.nameCategory['dob'];
    private username: string = this.nameCategory['user'];
    private password = bcrypt.hash(this.nameCategory['password'], 10);      // use bcrypt.compare('password', 10, function())
    private email: string = this.nameCategory['email'];

    private familiar: any = document.getElementById('familiar').elements;
    private country: string = this.familiar['country'];
    private address: string = this.familiar['address'];
    private state: string = this.familiar['state'];
    private city: string = this.familiar['city'];
    private zip: number = this.familiar['zip'];
    private phone: number = this.familiar['phone'];

    private card: any = document.getElementById('card').elements;
    private noc: string = this.card['noc'];                   //name on card
    private cardNo: number = this.card['cardNo'];
    private ccv: number = this.card['ccv'];
    private cardExp: string = this.card['exp-date'];
    private billing: string = this.card['billing'];
    private consent: HTMLDataElement = this.card['consent'];


    private style: any = document.getElementById('style').elements;
    private userStyle = this.style.value;

    // throw error if field is not filled out
    fillCheck(): HTMLStyleElement {

    }

    // throws error if password does not match confirm password
    private passwordCheck() {
        if (this.password) {
            bcrypt.compare(this.nameCategory['second-password'], this.password, (err: Error, res:any) => {
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
    emailCheck(): HTMLStyleElement {

    }

    //throws error if username is taken
    userCheck(): HTMLStyleElement {

    }


    // throw sucess everytime a field is filled 
    success(): HTMLStyleElement {

    }

    //throw failure if feild has an error
    failure(): HTMLStyleElement {

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

        return countries.append(datalist);

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
    register.C
}