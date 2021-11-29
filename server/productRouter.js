const express = require('express');
const fs = require('fs');
const router = express.Router();

let product = (data, id) => {
    const arr = JSON.parse(data)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id_product === id) {
            return JSON.stringify(arr[i])
        }
    }
}

router.get('/:id', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(product(data, +req.params.id));   
        }
    })
});


module.exports = router;