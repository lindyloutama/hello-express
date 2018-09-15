const fs = require('fs');
const path = require('path');

const updateShoppingList = (req, res) => {
  const filename = req.params.filename;
  const contents = JSON.stringify(req.body);

  fs.readFile(path.join(__dirname, 'shoppingList', filename), contents, (err, data) => {
    if (err) throw err;

    res.send(data);
  });
};

module.exports = updateShoppingList;
