//typescript login
export{}

class Startup {
    public static main(): void {
        console.log('Hello world');
        //return 'Hello world';
    }
}
Startup.main();
enum Color { red, green, blue };

let c: Color = Color.green;
console.log(c);

let obj = {
    name: "John",
    color: 23
}
if("name" in obj) {
    console.log('false');
}

let multitype: number | boolean;
multitype= true;


function example(num : number, text?: string, array?: Array<string>): boolean {
   // if you add a value in the beginning for any of these, it will be a default value 
   // optional values must be the last to be declared
   return true;
}

// use interface to define better define reusable objects

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet(): void {console.log(`Good Morning ${this.employeeName}`);}
    
}

let employee = new Employee('Joohnn');
employee.greet();

let Try = () => 'response';

console.log(Try());
/* promises are used to cue callbacks
    *syntax: example = new Promise;
            example.then(function() => {
                * do something *
            }).catch(function() {*error*}); 
            Promises allow me to execute commands in parallel. if i have two promises and one ends before the other 
            then the faster one will execute first. I believe promises are a great way to make sure things are working
            properly and also great for debugging your code. Especially if you add catch functions.
            
    *generator functions: example-> function* example(){do something; yield result}. This pauses the result of the function

    *async - await only works with promises

    *fetch and $.get are used to fetch files from the stack in JS

    *readLine(throws a prompt and accepts  a value) is used to read a console info


    *if a variable is defined but not instantiated at the beginning, its value can change as need be.
    * Also if you sepearate types with a pipe you can pass multiple types to one variable e.g. let multitype: number
    
    
    *unknown types ar like any but you can't access any properties of an unkown type without casting them when they 
    are being called
            */


let myArryay = [1,'string',true,null,'another string', undefined];

function testPromiseFunction(a: number, b:number) {
    return new Promise((resolve,reject) => {
        typeof !isNaN(a + b) ? resolve('this is valid') : reject(Error('This is invalid')); });
}



testPromiseFunction(5,6).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(new Error(err));
});

let testPromise = new Promise((resolve, reject) => {
    resolve(1);
}).then((result) => {
    console.log(result + ' this is the result');
}).catch((err) => {
    console.log(new Error('not resolved'));
});


