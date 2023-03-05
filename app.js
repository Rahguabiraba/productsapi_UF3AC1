const express = require('express')
const products_routes = require('./routes/products.js')
const PORT = process.env.PORT || 5000;
const slug = require('slugify');

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
    console.log(slug(`server is listening on port ${PORT}`, {
        replacement: '*'
    }))
})


