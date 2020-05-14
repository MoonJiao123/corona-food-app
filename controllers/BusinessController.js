/**
 * This file is to get the requested data of Uploading information from the business
 * This file also generate barcode when business user input their discount
 * 
 * Contributors: Yue Jiao, Yunning Yang
 */
const express = require('express')
const itemUpload = express.Router()
const cors = require('cors')
const item = require('../models/ProductModel.js')
itemUpload.use(cors())
itemUpload.post('/upload', (req, res) => {
    // console.log(req.body);
    // //generate coupon
    // var deduction = req.body.coupon;
    // console.log(deduction);
    // //generate img
    // var Barc = require('barcode-generator')
    //     , barc = new Barc()
    //     , fs = require('fs');
    // //create a 300x200 px image with the barcode 1234
    // var img = barc.code128(deduction, 300, 200);
    // fs.writeFile(__dirname + '/example.png', buf, function(){
    //     console.log('wrote it');
    // });
    console.log(req.body.coupon);
    const userData = {
        product_name: req.body.product_name,
        product_img: req.body.product_img,
        category: req.body.category,
        price: req.body.price,
        expire_date: req.body.expire_date,
        stock_amount: req.body.amount,
        coupon: req.body.coupon,
        store_id: null,
    }
    console.log(req.body);
    //it generate its own token after it created the user
    item.create(userData)
        .then(user => {
            res.json({ status:user.product_name + 'Added coupon to db' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}) 
module.exports = itemUpload
