import { isNull } from "util";
import { Module } from "module";


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
    private nameCategory: any = document.forms.namedItem('names');
    private name: string = this.nameCategory['fname'].value + ' ' + this.nameCategory['lname'].value;
    private dob: Date = this.nameCategory['dob'].value;
    private username: string = this.nameCategory['user'].value;
    private password = bcrypt.hash(this.nameCategory['password'].value, 10); 
    private email: string = this.nameCategory['email'].value;

    private familiar: any = document.forms.namedItem('location');
    private country: string = this.familiar['country'].value;
    private address: string = this.familiar['address'].value;
    private state: string = this.familiar['state'].value;
    private city: string = this.familiar['city'].value;
    private zip: number = this.familiar['zip'].value;
    private phone: number = this.familiar['phone'].value;

    private card: any = document.forms.namedItem('card');
    private noc: string = this.card['noc'].value;                   //name on card
    private cardNo: number = this.card['cardNo'].value;
    private ccv: number = this.card['ccv'].value;
    private cardExp: string = this.card['exp-date'].value;
    private billing: string = this.card['billing'].value;

    private consent: HTMLDataElement = this.card['consent'].value;


    private style: any = document.forms.namedItem('style');
    private userStyle = this.style.value;

    private forms = document.querySelector("form");



    // red error outline on input if true, green success outline on input if false. Checking if people filled out feilds correctly

    fillCheck():HTMLElement {
        return this.forms.foreach(function(){
            this.forms.querySelectorAll("input[type=text][value='']") || 
            (this.forms.querySelectorAll("input[type=number][value='']") || typeof this.forms.querySelectorAll("input[type=number]").values !== "number") ||
            this.forms.querySelectorAll("input[type=date][value='']") || this.forms.querySelector("input[type=radio][value='']")  ? 
                this.forms.input.classList.add('uk-text-danger') && this.forms.setAttribute("novalidate", "") : 
                this.forms.input.classList.add('uk-text-success') && this.forms.removeAttribute("novalidate") ()});
        }

    // throws error if password does not match confirm password. light up the compare password feild and throw error/sucess messgaes
    passwordCheck()  {
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
    ageCheck(){ 
       return 18 > 2018 - this.dob.getFullYear() ? false : true;
    }


    //throws error if email is already in db and says this email already exists
    emailCheck(): boolean {
        
    }

    //throws error if username is in db and says this username already exists
    userCheck(): boolean {
       
    }

    fail() {
        
    }


    //autopopulate country
    Country(): HTMLElement {
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
            id: () => update.previousid+=1,
        }
        
        const thisUser = {
            userNo: update.id(), name: this.name, dob: this.dob, country: this.country, address: this.address, email: this.email, noc: this.noc,
            cardNo: this.cardNo, ccv: this.ccv, cardExp: this.cardExp, phone: this.phone, username: this.username,
            password: this.password      }

        update.previousid = thisUser.userNo; // at the end of the day this will call from the database id

        let newUser = JSON.stringify(thisUser);

        return fetch('../user.html'); 
    }

}

window.onload=()=> {
    const implement = new register;
    implement.Country;
    implement.passwordCheck; 
}