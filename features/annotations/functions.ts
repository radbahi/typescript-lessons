// the : number annotation outside the argument paragraphs below refers to the return value of the function
//annotation syntax for arrow function
const add = (a: number, b: number): number => {
    return a + b
}

//annotation syntax for named function
function divide(a:number, b:number): number {
    return a / b
}

//annotation syntax for anonymous function
const multiplty = function(a:number, b:number): number {
    return a * b
}

//void means a function that won't return anything. can also be used on return null or return undefined.
const logger = (message: string): void => {
    console.log(message)
}

//never means end of function will never be reached. throwing error takes you out of the function immediately.
const throwError = (message: string): never => {
    throw new Error(message)
}

//below is how to destructure with annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

//the annotations and destructure syntax must always be kept separate like below.
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)