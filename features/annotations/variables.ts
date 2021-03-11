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