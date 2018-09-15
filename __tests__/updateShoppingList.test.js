const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const updateShoppingList = require('../controllers/updateShoppingList');

it('updates an existing shopping list', (done) => {
  expect.assertions(1);

  const filename = Date.now().toString();
  const filePath = path.join(__dirname, '../controllers/shoppingList', filename);

  const body = JSON.stringify({
    items: ['carrots', 'crunchies', 'cornflakes'],
  },

  fs.writeFile(filePath, JSON.stringify(body), (err) => {
    if (err) throw err;
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/shoppingList/:filename',
      params: {
        filename: filename,
      },
      body: body,
    });
  }),

  const response = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter,
  });

  updateShoppingList(request, response);

  response.on('end', () => {
    const filename = response._getData().filename;
    const filePath = path.join(__dirname, '../controllers/shoppingList', filename);

    fs.readFile(filePath, 'utf8', (error, data) => {
      expect(data).toBe(JSON.stringify(request.body));
      done();
    });
  });
});
