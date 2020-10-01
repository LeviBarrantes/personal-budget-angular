const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));



app.get('/hello',(req, res) =>{
    res.send('Hello World');
});


app.get('/budget', (req, res) =>{
    
    var fs = require('fs');
    const myBudget = fs.readFileSync('./budget_1.JSON');
    const budget = JSON.parse(myBudget);
    res.json(budget);

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
  