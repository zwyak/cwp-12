const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);

db.pizzas.create({
    name: "Peperoni",
    description: "Double cheese",
    calories: 500
  }).then(res=>{
  }).catch(err=>console.log(err));

db.pizzas.findAll({raw:true}).then(pizzas=>{
    console.log(pizzas);
  }).catch(err=>console.log(err));
