const http = require('http'); //import native moduales from node js
const app = require('./app');//declare a var called pp and where the dependency

const port = process.env.PORT || 3000; //define port of an evironment variable(hard coded value)

const server = http.createServer(app);// pass app variable here referes the code and functionality of app.js to the create server function. create server method on http meet an event handler so express acts like an event handler.

server.listen(port);//know which variable to listen
