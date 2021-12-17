const app = require('express');
const router = app.Router();
const products = require('../data/product.json');
const Product = require('../models/create');

/* GET home page. */
// router.get('/', (request,response)=>{
//   let data = products.map(product =>{
//     return {
//       id: product.id,
//       title:product.name,
//       subtitle:product.price,
//       picture:product.picture,
//       primaryCta: `/product/${product.id}`,
//       primaryCtaLabel: 'Détails'
//     };
//   })
//   response.render('index', {title:'Home', data});
// });

router.get('/', (request,response)=>{
  Product.find()
  .then(products=>{
    let data = products.map(product =>{
      return {
        id: product._id,
        title:product.name,
        subtitle:product.price,
        picture:product.picture,
        primaryCta: `/product/${product._id}`,
        primaryCtaLabel: 'Détails'
      };
    })
    response.render('index', {title:'Home', data});
    
  })
  .catch(error=>console.error(error));
})

module.exports = router;
