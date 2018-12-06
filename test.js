"use strict";

//console.log(window.location.port); 

//const trial= require("./js/helloworld.js");

/*import { Startup as worldGreeting} from "js/helloworld.js";
import {Employee as worker} from "js/helloworld.js";*/

var util = require('util');
var emmiter = require('events');

const update={
    previousid: -1,
    id: () => update.previousid+=1,
}

const thisUser = {
    userNo: update.id()
}

update.previousid = thisUser.userNo;

console.log(update.previousid);


let sData = 'wisen';

function display() {
    console.log(`sData value is ${sData}`);
}

display.call();



function person() {
    this.firstname = 'julian';
    this.lastname = 'smith';
}

person.prototype.greet = function() {console.log('Hello ' + this.firstname + ' ' + this.lastname)};
person.prototype.born = 'what\'s your b-day';

function policeman() {
    person.call(this); // I'm making the properties of person available to policeman 
    this.badgeNumber= 1234;
}

util.inherits(policeman, person); // allows me to add all the prototypes from person to policeman
var officer = new policeman();
officer.greet();
console.log(officer.born);


function Greetr() {
    this.greeting = "Hello";
}

util.inherits(Greetr, emmiter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting);
    this.emit('greet', data);
}
var cheers = new Greetr();
cheers.on('greet', function (data) {
    console.log('I love '+data);
})
cheers.greet('Jesus');

let worker = require('./js/helloworld');

let slave = new worker('Hebert');
slave.greet();



function sentence(callback) {
    callback();
}

let example= new sentence(function () {
    console.log('this is my callback');
});


const fs = require('fs');

let test = fs.readFile(__dirname, 'utf8',function(err, data) {
    if (err) {
        throw Error('this code has not run')
    }
    else {
        console.log(data);
    }
});

console.log(test);



//let openingGreeting=require('./js/helloworld').Startup;

//openingGreeting.main();