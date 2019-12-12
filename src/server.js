const port = 3003;
const express = require('express');
const app = express();
const dataBase = require('./dataBase');
const bodyPaser =require('body-parser');

app.use(bodyPaser.urlencoded({ extended: true }))


app.get('/products', (req, res)=>{
    res.send(dataBase.getProducts())
})

app.get('/products/:id',(req, res)=>{
    res.send(dataBase.getProduct(req.params.id));
})

app.post('/products', (req,res)=>{
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product);
})

app.put('/products/:id', (req,res)=>{
    const product = dataBase.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product);
})

app.delete('/products/:id', (req,res)=>{
    const product = dataBase.deleteProduct(req.params.id);
    res.send(product);
})


app.listen(port, ()=>{
    console.log(`Service execution in the port ${port}`)
})