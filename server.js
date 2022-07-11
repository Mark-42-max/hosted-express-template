const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config();
const port = process.env.port;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/challenge", (req, res) => {


    var alphabets = req.body.data.filter(item => {
        if (funct(item) === String) {
            if (!containsSpecialChars(item)) {
                return item;
            }
        }
    })

    var numbers = req.body.data.filter(item => {
        if (funct(item) === Number) {
            return item;
        }
    })

    console.log(alphabets);

    res.json({
        "is_success": true,
        "user_id": "kunal_roy_1906106",
        "count": req.body.data.length - 1,
        "email": "1906106@kiit.ac.in",
        "roll_number": "1906106",
        "numbers": numbers,
        "alphabets": alphabets
    })
})

function funct(d) {

    if (d.startsWith('{') && d.endsWith('}')) {
        return Object
    } else if (d.indexOf('-') !== -1 && !isNaN(Date.parse(d))) {
        return Date;
    } else if (!isNaN(parseFloat(d))) {
        return Number
    } else if (d.startsWith('[') && d.endsWith(']')) {
        return Array
    } else return String
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

app.listen(8081);