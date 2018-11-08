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

export class login {
    // class to handle login validation and authentication
    private nameCategory: any = document.getElementById('names').elements;
    private name: string = escape(this.nameCategory['fname']) + ' ' + escape(this.nameCategory['lname']);
    private dob: string = escape(this.nameCategory['dob']);
    private username: string = escape(this.nameCategory['user']);
    private password = bcrypt.hash(escape(this.nameCategory['password']), 10, (err, hash) => /*return either true or false depending  on if info was saved to the db*/);  // use bcrypt.compare('password', 10, function())
    private email: string = escape(this.nameCategory['email']);

    private familiar: any = document.getElementById('familiar').elements;
    private country: string = escape(this.familiar['country']);
    private address: string = escape(this.familiar['address']);
   
    private card: any = document.getElementById('card').elements;
    private noc: string = escape(this.card['noc']);                   //name on card
    private cardNo: string = escape(this.card['cardNo']);
    private ccv: string = escape(this.card['ccv']);
    private cardExp: string = escape(this.card['exp-date']);
    private phone: string = escape(this.card['phone']);
   

    private style: any = document.getElementById('style').elements;
    private casual: string = escape(this.style['casual']);
    private sporty: string = escape(this.style['sporty']);
    private edgy: string = escape(this.style['edgy']);
    private formal: string = escape(this.style['formal']);

    // throw error if field is not filled out
    fillCheck(): HTMLStyleElement {

    }

    // throws error if password does not match confirm password
    private passwordCheck(hash): boolean {

        hash ? bcrypt.hash(escape(this.formID['second-password']), hash, (err, hash) => ) : Error('Please enter a password')
    }

    // throws error if age is under 18
    ageCheck(): HTMLStyleElement {
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


function user() {
    //gets info from login and displays all that when and where neccessary

}