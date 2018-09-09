const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const createShoppingList = require('../controllers/getShoppingList');

it('gets an exisiting shopping list', (done) => {
 expect.assertions (1);

response.on('end', () => {
  const filename = Date.now();
  const filePath = path.join(__dirname, '../controllers/shoppingList', filename);

  const body = JSON.stringify({
    items: ['carrots', 'crunchies', 'cornflakes']
   });

  {
    method: 'GET',
    url:'/shoppingList/:filename',
    params; {
      filename: filename
    }
  }
  const response = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter,
  });

  fs.writeFile(filePath, 'utf8', (error, data) => {
    expect(data).toBe(JSON.stringify(request.body));
    done();
  });
 });
});

