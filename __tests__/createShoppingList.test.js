const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const createShoppingList = require('../controllers/createShoppingList');

it('creates a new shopping list', (done) => {
  expect.assertions(1);

  const request = httpMocks.createRequest({
    method: 'POST',
    url: '/shoppingList',
    body: {
      items: ['broccoli', 'bread', 'bananas'],
    },
  });
  const response = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter,
  });

  createShoppingList(request, response);

  response.on('end', () => {
    const filename = response._getData().filename;
    const filePath = path.join(__dirname, '../controllers/shoppingList', filename);

    fs.readFile(filePath, 'utf8', (error, data) => {
      expect(data).toBe(JSON.stringify(request.body));
      done();
    });
  });
});
