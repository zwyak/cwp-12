const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config)

setTimeout(()=>{
  db.pizzas.findAll({raw: true}).then(p => {
    console.log(p);
  })

  
}, 5000);
