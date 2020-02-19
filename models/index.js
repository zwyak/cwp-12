const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize(config.database);

  const turtles = Turtle(Sequelize, sequelize);
  const weapons = Weapon(Sequelize, sequelize);
  const pizzas = Pizza(Sequelize, sequelize);

  sequelize.sync({force:true})
  .then(() => pizzas.create({
    name: 'Peperony and Peppers',
    description: 'Pizza sauce, pepperony, peppers, cheese, ',
    calories: 560
  }))
  .then(() => pizzas.create({
    name: 'Ranch Pizza',
    description: 'American ranch sauce, chicken, pork, tomatos, cheese',
    calories: 560
  }))
  .then(() => pizzas.create({
    name: 'Chicken BBQ',
    description: 'Pizza sauce, chicken, pork, onion, BBQ sauce, cheese',
    calories: 560
  }))

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};
