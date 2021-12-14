const app = require('express');
const router = app.Router();
const products = require('../data/product.json');

/* GET home page. */
router.get('/', (request,response)=>{
  let data = products.map(product =>{
    return {
      title:product.name,
      subtitle:product.price,
      picture:product.picture
    };
  })
  response.render('index', {title:'Home', data});
});

module.exports = router;
