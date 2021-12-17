const express = require('express');
const router = express.Router();
const products = require('../data/product.json');
const Product = require('../models/create');

// recuperer un produit et l'affiche dans article-details
router.get('/:id', (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then(product => {
      response.render('product/article-details', {
        title: product.name,
        datum: {
          id: product._id,
          picture: product.picture,
          title: product.name,
          subtitle: product.price
        }
      })
    })
    .catch(error => console.error(error));
})

router.get('/', (request, response) => {
  Product.find()
    .then(products => {
      response.render('product/manage-products', { title: 'Manage all products', products })
    })
    .catch(error => console.error(error));
});

/**soumission du formulaire la base et verif formulaire */
router.post('/', (request, response) => {
  let errors = [];

  ['name', 'price', 'stock', 'picture'].forEach(property => {
    if (!request.body[property]) {
      errors.push({
        property,
        message: `${property} is required!`
      })
    }
  });
  if (errors.length) {
    Product.find()
      .then(products =>
        response.render('product/manage-products', { title: 'Manage all products', errors, products }))
      .catch(error => console.error(error));
    return;
  }
  let product = new Product(request.body);
  product.save() //enregistrer dans la base
    .then(
      response.redirect('/product')) 
    .catch(error => console.error(error));
})

// delete un produit
router.post('/:id/delete', (request, response) => {
  Product.remove({ _id: request.params.id })
    .then(()=>{
      response.redirect('/product')
    })
    .catch(error => console.error(error));
})

router.get('/:id/edit', (request, response) => {
  Product.findById(request.params.id) // recupère les data du  produit à modifier
  .then(product =>{
    Product.find() // recuperer tous les produits
      .then(products =>
        response.render('product/manage-products', { title: 'Manage all products', products, product }))
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
  
})
//soumission du form après update
router.post('/:id/edit', (request, response) => {
Product.findOneAndUpdate({_id: request.params.id}, request.body)
.then(() => response.redirect ('/product'))
.catch(error => console.error(error));
})

module.exports = router;