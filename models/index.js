const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize(config.database);

  const turtles = Turtle(Sequelize, sequelize);
  const weapons = Weapon(Sequelize, sequelize);
  const pizzas = Pizza(Sequelize, sequelize);

  turtles.hasOne(weapons);
  turtles.hasMany(pizzas);

  sequelize.sync({force:true}).then(()=> {
    console.log("Tables have been created");

    pizzas.create({
      name: "Toskana",
      description: "Twice cheese",
      calories: 350
    }).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
    
  })
  .catch(err => console.log(err));

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};
