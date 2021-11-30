const express = require('express');
const fs = require('fs');
const app = express();
const cart = require('./cartRouter');// обработчик всех запросов корзины
const productAPI = require('./productRouter');// api информации о товара
const product = require('./product');


app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);
app.use('/api/product/', productAPI);
app.use('/product/', product);

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));