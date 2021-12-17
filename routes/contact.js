const app = require('express');
const router = app.Router();
const Contact = require('../models/contact');

router.get('/', (request, response) => {
  response.render('contact/new', { title: 'Contact us' }); 
})
router.post('/',(request, response)=>{
  ['name', 'email'].forEach(property => {
    if (!request.body[property]) {
      response.render('contact/new', {
        title: 'Contact us',
        error: {
          property,
          message: `${property} is required!`
        }
      });
      return;
    }
  });

  request.session.username = request.body.name;
  let contact = new Contact(request.body);
  contact.save()
  .then(
    response.redirect('/contact-us'))
  .catch(error => console.error(error));
})

router.get('/list', (request,response)=>{
  Contact.find()
  .then(data=>{
    console.log(data);
  })
  .catch(error=>console.error(error));
  response.send('ok');
})

module.exports = router;
