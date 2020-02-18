const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);

db.pizzas.findAll({raw:true}).then(turtles=>{
  console.log(turtles);
}).catch(err=>console.log(err));
