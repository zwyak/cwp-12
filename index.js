const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config)

setTimeout(()=>{
  //All turtles
  db.pizzas.findAll({raw: true}).then(t => {
    console.log(t);
  })

  //All turtles whith favorite pizza
  db.turtles.findAll({
    include: [{
        model: db.pizzas,
        where: { name: 'Peperony and Peppers' }
    }]
}).then(t => {
    console.log(t);
  })

}, 3000);
