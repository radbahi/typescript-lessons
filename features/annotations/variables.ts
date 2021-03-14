const apples: number = 5 // the : number tells ts we're only ever going to assign numbers to the apples variable
let speed: string = 'fast' // ditto for strings
let hasName: boolean = true // ditto again

let nothingMuch: null = null // this and below are actually valid
let nothing: undefined = undefined

//built in objects
let now: Date = new Date()

// arrays
let colors: string[] = ['red', 'green', 'blue'] // tells ts that this will be an array of strings
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]

// classes
class Car {

}
let car: Car = new Car() // yes, we can do it for custom classes too

// object literals
let point: {x: number; y: number} = {
    x: 10,
    y: 20
} // : {x: number, y: number} is the syntax for object literals. define your attributes and their types. they MUST be separated by ;

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
} // : (i: number) => void tells us what type of value we are assigning to the variable here
// we describe i being a number taken in as an argument. void means we are not going to be returning anything.
// not sure if we absolutely have to type out (i: number) twice tho

//TECHNICALLY we don't need to add any of these annotations. go ahead and delete any of them and then hover over the variable
//a tooltip should pop up with the annotation still there. this is what TS inference does.

const color = 'red'
//if declaration and initialization are on the same line, ts will try to figure out the type of color for us
//at least, that's what it shows in the video. doesnt show that for me here.



// WHEN TO USE ANNOTATIONS
//when a function that returns the any type. any means ts has no idea what tpye it'll be
const json = '{"x":10, "y":20}'
const coordinates: {x: number, y: number} = JSON.parse(json) //by annotating coordinates, we get rid of its any type. now ts can do its job.
console.log(coordinates) // {x:10, y:20}

//when we declare a variable on one line and initialize it elsewhere
let words = ['red', 'green','blue']
let foundWord: boolean //without this boolean annotation, foundWord will be type any

for (let i=0; i<words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true //initialized here but declared before
    }
}

//variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false //if number is above zero, assign it to this variable. otherwise, assign false. this will be 2 different types
// this annotation defines it as being either boolean OR number. without this, there will be an error

for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}