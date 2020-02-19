const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config)

setTimeout(()=>{
  //All
  db.turtles.findAll({raw: true}).then(t => {
    console.log(t);
  })

  db.pizzas.findAll({raw: true}).then(t => {
    console.log(t);
  })

  db.weapons.findAll({raw: true}).then(t => {
    console.log(t);
  })

}, 3000);
