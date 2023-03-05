const express = require('express')
const products_routes = require('./routes/products.js')
const PORT = process.env.PORT || 5000;

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})


