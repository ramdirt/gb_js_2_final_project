const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');


router.get('/:id', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {  
            res.sendFile(path.join(__dirname, '../public', 'product.html'))
        }
    })
});


module.exports = router;