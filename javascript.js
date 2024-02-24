"use strict"
// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sum(...num) {
    let numSum = 0;
    for (let number of num) {
        numSum += number;
    }
    return numSum;
}
let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log( result );

// დავალება 2

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}
	

// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
// 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
    let firstName = user.firstname;
    let lastName = user.lastname;
function printName() {
    if (user.isloggedin === true) {
        console.log(firstName + " " + lastName + ", " + true)
    } if (user.isloggedin === false) {
        console.log(firstName + " " + lastName + " " + false)
    }
}
printName();



// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max )
let array = [5, 15, 20, -10, 40, 11]

function maxNum() {
    let maxValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    console.log(maxValue);

    // console.log(Math.max(...array))
}
maxNum();


// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

function checkNum(num) {
    if (num % 2 == 0) {
        console.log("this number is even");
    } else {
        console.log("this number is odd")
    }
}
checkNum(31);




// მოცემულია მასივი:
let array1 = [1,2,3,4,5]; 
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
function reversNum() {
    for (let i = array1.length - 1; i >= 0; i--) {
        console.log(array1[i]);
    }
}
reversNum();




// ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let checkAge = age => (age > 18) ? "სრულწოლოვანი" : "არასრულწოლოვანი";

let userAge = 35;
let age = checkAge(userAge);
console.log(age);