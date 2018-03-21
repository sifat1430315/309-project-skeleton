module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/product')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/product/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);

	app.route('/api/product/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);

app.route('/product/all').get(products.listView);
app.route('/product/new').get(products.createView);
app.route('/product/:productId').get(products.singleView);

app.param('productId', products.productByID);
};
