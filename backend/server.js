/*Requies command for installing es6 to es5 translator: 

npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --sa
ve-dev

*** --save-dev is to save @babel/preset-env dependencies to nodemon directory ***
*** nodemon is to easier way to start or stop the server when there is a change in our code.***
*/

import express from 'express';
import data from './data';

const app = express(); //construct the server.

// app handles get request
// first parm is the directory on server, second is a function that will execute when route is matched.
//result in sending the product back.
app.get("/api/products", (req, res) => {
    res.send(data.products);
}) 

app.get('/api/products/:id', (req, res) =>{
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product){ //if product id matches
        res.send(product);
    }else{
        res.status(404).send({ message: 'Product not found!'});
    }
});
// listen request for starting the server
app.listen(5000, () => { console.log("Server starts at  http://localhost:5000")})
