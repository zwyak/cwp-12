const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config)

setTimeout(()=>{
  //All turtles
  db.turtles.findAll({raw: true}).then(t => {
    console.log(t);
  });

  //All turtles with favorite pizza
  db.sequelize.query(
        "select t.* from turtles t inner join pizzas p on t.firstFavoritePizzaId = p.id where p.name = 'Ranch Pizza' ",
        db.turtles,
        {raw: true}
  ).then(p => {
    console.log(p);
  });

  //All pizzas which checked as favorite (distinct)
  db.sequelize.query(
        'select * from pizzas where id in (select distinct firstFavoritePizzaId from turtles)',
        db.pizzas,
        {raw: true}
  ).then(p => {
    console.log(p);
  });

  //Create turtle
  db.turtles.create({
    name: 'Vlad',
    color: 'Black',
    weaponId: 2,
    firstFavoritePizzaId: 3,
    secondFavoritePizzaId: 1
  });

  //Update pizzas
  db.pizzas.update({
    description: db.sequelize.literal("description || ' Super-Fat!'")
  }, {
  where: {
    calories:{
      [Sequelize.Op.gt]: 500
    }
  }
  }).then(()=>{
    db.pizzas.findAll({raw: true}).then(p => {
      console.log(p);
    });
  });

//All weapons with dps > 100

  db.weapons.findAll({where:{
    dps:{
      [Sequelize.Op.gt]: 50
    }
  }, raw: true}).then(w => {
    console.log(w);
  });

  //All pizzas with id=1
  db.pizzas.findAll({where:{id:1},raw: true}).then(p => {
    console.log(p);
  });

}, 3000);
