let score = true
// let score = undefined
// let score = null
// let score = "86abc"
// let score = "57"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" -> 33
// "33abc" -> Nan
// true -> 1
// false -> 0
// null -> 0



//let isLoggedIn = 1                   //true
//let isLoggedIn = 0                   //false
// let isLoggedIn = ""                 //false
// let isLoggedIn = "Jay Thakur"       //true          
//let isLoggedIn = 243                 //true
//let isLoggedIn = -1                  //true
// let isLoggedIn = null               //false
let isLoggedIn = undefined           //false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)



// let key = 12               //String
// let key = undefined        //String
//let key = true              //String
let key = null                //String



let stringKey = String(key)

console.log(stringKey)
console.log(typeof stringKey)



// *********************Operations*************************

console.log("++++++++++++++++++++++++++++++")
let value = 3
let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " Jay"
str3 = str1+str2
//console.log(str3)


// console.log(1+"2")
// console.log("1"+2)
// console.log("1"+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")
// console.log(1+2+"3"+4+5)

// console.log(true);
// console.log(+true);
// console.log(-true);
// console.log(+"")
// console.log(-"")

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.table([num1, num2, num3])
 
let gameCounter = 100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);