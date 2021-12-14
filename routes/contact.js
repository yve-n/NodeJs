const app = require('express');
const router = app.Router();

router.get('/', (request, response) => {
  response.render('contact/new', { title: 'Contact us' }); 
})
router.post('/',(request, response)=>{
  console.log(request.body);

  response.redirect('/contact-us');

})

module.exports = router;
