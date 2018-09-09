const fs = require('fs');
const path = require('path');

const getShoppinglist = (res, req) => {
  const filename = req.params.filename;
  const contents = JSON.stringify(req.body);

  fs.readFile(path.join(__dirname, 'shoppingList', filename), 'utf8', (err, contents) => {
    if (err) throw err;
    res.send(contents);
  });
};

module.exports = getShoppingList;