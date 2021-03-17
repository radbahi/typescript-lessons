const profile = {name: 'alex', 
age: 20,
 coords: {lat:0, lng: 15},
 setAge(age: number):void {
    this.age = age
 }
}

//remember how we destructured arguments in the function file? same syntax here. ignore name's error of it being declared already
const {age, name}: {age: number; name: string} = profile

//how to destruct from nested attributes
const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile