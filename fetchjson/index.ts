// of course, all typescript must be in .ts files
import axios from 'axios'

//FIRST BIT OF TYPESCRIPT BELOW
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
//interfaces is typescript are used to define the structure of an object

// remember that typescript code is not read by browsers. we have to compile this into javascript code. 
axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    const todo = response.data as Todo // as Todo is part of typescript. notice that if the properties below are spelled wrong, theyre lit up
    const id = todo.
    const title = todo.title
    const completed = todo.completed

    //if argument types below aren't matched with the logTodo function, we will get an underline error
    logTodo(id, title, completed)
})

// to compile, type in terminal 'tsc nameoffile.ts'
// you'll now see a new file called 'nameofffile.js'
// running 'ts-node nameoffile.js' will compile and execute in one line in terminal

//helper function to log on line 19
// the : number, : string, and : boolean after every argument are typescript annotations that help us ensure we match arguments correctly
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The Todo with ID: ${id}
    has a title of: ${title}
    Is it finished? ${completed}`)
}