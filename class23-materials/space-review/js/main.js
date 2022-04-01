//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const newNumbers = [2,3,4,5]

alert( newNumber.reduce( (acc,c) => acc + c, 0) )
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let nums = [20,30,40,50,60]
function takeInArray(){
    return nums.map( n => n * n)
}
console.log()

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
    let reverseStr = str.split('').reverse().join('')
    console.log(reverseStr)
}
reverseStr('car')


//Create a function that takes in a string
//Alert if the string is a palindrome or not
