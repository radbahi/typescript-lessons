'use strict'
exports.__esModule = true
// of course, all typescript must be in .ts files
var axios_1 = require('axios')
// remember that typescript code is not read by browsers. we have to compile this into javascript code.
axios_1['default']
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response.data)
  })

// this is compiled javascript code from typescript
