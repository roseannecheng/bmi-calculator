const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pug = require('pug');

app.use('/', express.static('public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('bmi');
});

app.post('/', (req, res)=>{
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    height = height / 100;

    let bmi = weight / (height * height);
    
    // console.log(bmi);
    // console.log(weight);
    res.render('bmi', {result: `Your BMI result is: ${bmi.toFixed(1)}`});
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000!');
});

//problems
//how to have input not be erased upon submission
//how to fetch data from form id instead of name