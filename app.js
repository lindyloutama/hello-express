const express = require('express');

const bodyParser = require('body-parser');
const helloWorld = require('./controllers/helloWorld');
const createShoppingList = require('./controllers/createShoppingList');
const getShoppingList = require('./controllers/getShoppingList');

const app = express();
app.use(bodyParser.json());
app.get('/', helloWorld);
app.post('/shoppingList', createShoppingList);
app.get('/shoppingList/:filename', getShoppingList);
app.listen(3000, () => console.log('Example app listening on port 3000!'));
