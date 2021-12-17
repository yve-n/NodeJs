const app = require('express');
const router = app.Router();

router.get('/', (request, response) =>{
    let persons =[
      {name:'nam', age:12},
      {name:'assam', age:06},
      {name:'binam', age:04}
    ];
    persons = persons.map(person =>{
      return{
        title: person.name,
        subtitle: person.age,
        primaryCta: '/profile/iduser',
        primaryCtaLabel: 'See profile'
      };
    })
    
  response.render('about', {title:'about us' , persons});
  });

  module.exports = router;