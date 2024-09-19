//------------------------------ Class -----------------------------//
// class Rectangle {
//     constructor( name, width, height){
//         this.name = name;
//         this.width = width;
//         this.height = height;
//     }

//     // all these methods will be on the prototype 
//     area(){
//         return this.height * this.width;
//     }

//     perimeter(){
//         return 2*(this.height + this.width)
//     }

//     isSquare(){
//         return this.width === this.height;
//     }
// }

// const square = new Rectangle('Square', 20, 20);
// console.log(square.area()) //20
// console.log(square.isSquare()) //true

//------------------------------ Class Inheritance-----------------------------//
// class Shape{
//     constructor(name){
//         this.name = name;
//     }

//     logName(){
//         console.log('Shape name:', this.name);
//     }
// }

// class Rectangle extends Shape{
//     constructor(name, width, height){
//         // calling constructor of the parent class
//         super(name);

//         this.height = height;
//         this.width = width;

//     }
// }

// class Circles extends Shape{
//     constructor(name,radius){
//         super(name)
//         this.radius = radius;
//     }

//     area(){
//         return 2*2.14*(this.radius)^2;
//     }
// }

// const rect = new Rectangle('Rect 1', 10,10);
// console.log(rect.name) // Rect 1
// rect.logName(); // Shape name: Rect 1

// const cir = new Circles('Cir 1', 5);
// console.log(cir.area())

//-------------------------------- Static Methods ------------------------------------//
// static method is a method that we can call directly on the class


// class Rectangle extends Shape{
//     constructor(name, width, height){
//         // calling constructor of the parent class
//         super(name);

//         this.height = height;
//         this.width = width;

//     }
    
//     static getClass(){
//         return 'This is a static class for the Rectangle class'
//     }
// }

// const rect = new Rectangle('Rect 1', 10,10);

// //Note: We dont to call the instance we call the class itself 
// console.log(Rectangle.getClass())

//-------------------------------- bind() and 'this' ------------------------------------//
// this can be used in many scenerios and all do something different. JS give us 3 different
// methods to manually control/define what 'this' keyword should do/means/point to


//bind() will allow us to set 'this' value and return a new function where 'this' value is bound to 
// whatever the value is that we pass in it
// class APP{
//     constructor(){
//         this.servername = 'localhost';

//         // event listener anc call a class method use bind()
//         document
//             .querySelector('button')
//             .addEventListener('click', this.getServerName.bind(this));
//     }

//     getServerName(){
//         console.log(this.servername)
//     }
// }

// const app = new APP();

// app.getServerName();

//-------------------------------- getters and setters ------------------------------------//
// methods used to get or set properties for an object

// class Person{
//     constructor(firstName, lastName){
//         // '_' usually means its a private property 
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     // getter
//     // may want to add some funtionality 
//     get firstName(){
//         // J + ohn
//         return this.capitalizeFirst(this._firstName);
//     }

//     // setter
//     set firstName(value){
//         this._firstName = this.capitalizeFirst(value);
//     }

//     capitalizeFirst(value){
//         return value.charAt(0).toUpperCase + value.slice(1);
//     }
// }

// const person1 = new Person('john','doe');
// console.log(person1.firstName) // getter => 'John'

// person1.firstName = 'frank'; // setter => ' _firstName: "Frank" '

//-------------------------------- getters and setters with defineProperty()------------------------------------//

// getters and setters with object literals
// function Person(firstName, lastName){
//     this._firstName = firstName;
//     this._lastName = lastName;

//     Object.defineProperty(this, 'firstNameYesSir', { 
//         get: function (){
//             return this.capitalizeFirst(this._firstName);
//         },
//         set: function(value){
//             this._firstName = value;
//         }
//     })
// }

// Person.prototype.capitalizeFirst = function(value){
//     return value.charAt(0).toUpperCase() + value.slice(1)
// }

// const person1 = new Person('Juan', 'Garcia');
// console.log(person1.firstNameYesSir);
// person1.firstNameYesSir = 'Beyonce';
// console.log(person1.firstNameYesSir);

//-------------------------------- Private Properties Convention ------------------------------------//
// class Wallet{
//     constructor(){
//         this._balance = 0;
//         this._transactions = [];
//     }

//     deposit(amoutn){
//         this._processDeposit(amoutn);
//         this._balance += amoutn;
//     }

//     withdraw(amoutn){
//         this._processWithdraw(amoutn)
//         this._balance -= amoutn; 
//     }

//     //private method
//     _processDeposit(amount){
//         this._transactions.push({
//             type:'withdraw',
//             amount: amount
//         })
//     }

//     _processWithdraw(amount){
//         this._transactions.push({
//             type:'deposit',
//             amount
//         })
//     }

//     get balance(){
//         return this._balance;
//     }

//     get transactions(){
//         return this._transactions
//     }
// }

// const wallet = new Wallet();
// wallet.deposit(200);
// wallet.withdraw(50)
// console.log(wallet.transactions, wallet.balance)

//-------------------------------- Private Class Fields ------------------------------------//
// Note this is for newer browsers. Some might not support this feature

// class Wallet{
//      // '#' defines it as a private field that cant be accessed outside this class
//     #balance = 0;
//     #transactions = [];

//     deposit(amount){
//         this.#processDeposit(amount);
//         this.#balance += amount;
//     }

//     withdraw(amount){
//         this.#processWithdraw(amount);
//         this.#balance -= amount;
//     }

//     #processDeposit(amt){
//         this.#transactions.push({
//             type: 'Deposit',
//             amt
//         })
//     }

//     #processWithdraw(amt){
//         this.#transactions.push({
//             type: 'Withdraw',
//             amt
//         })
//     }

//     get balance(){
//         return this.#balance
//     }

//     get transaction(){
//         return this.#transactions
//     }
// }
// const wallet2 = new Wallet();

// wallet2.#balance; // error cannot access private property unlink '_balance'
// wallet2.deposit(500);
// wallet2.withdraw(200);
// console.log(wallet2.balance, wallet2.transaction)

//-------------------------------- Property Flags & Descripters ------------------------------------//
// Flags:
// Configurable - if true , the property can be deleted and these attributes can be modified,
// otherwise not 
// Enumerable - if true, the property will be returned in a 'for.. in' loop, otherwise not
// Writable - if true, the value of the property can be changed, otherwise not 
// Value - the value of the property 

