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
    id: 1,
    name: 'Peperony and Peppers',
    description: 'Pizza sauce, pepperony, peppers, cheese',
    calories: 700
  }))
  .then(() => pizzas.create({
    id: 2,
    name: 'Ranch Pizza',
    description: 'American ranch sauce, chicken, pork, tomatos, cheese',
    calories: 560
  }))
  .then(() => pizzas.create({
    id: 3,
    name: 'Chicken BBQ',
    description: 'Pizza sauce, chicken, pork, onion, BBQ sauce, cheese',
    calories: 470
  }))
  .then(() => weapons.create({
    id: 1,
    name: 'MiniGun',
    dps: 100
  }))
  .then(() => weapons.create({
    id: 2,
    name: 'Knife',
    dps: 5
  }))
  .then(() => weapons.create({
    id: 3,
    name: 'Kalashnikov',
    dps: 46
  }))
  .then(() => turtles.create({
    name: 'Donatello',
    color: 'Blue',
    weaponId: 1,
    firstFavoritePizzaId: 2,
    secondFavoritePizzaId: 3
  }))
  .then(() => turtles.create({
    name: 'Leonardo',
    color: 'Red',
    weaponId: 3,
    firstFavoritePizzaId: 1,
    secondFavoritePizzaId: 2
  }))

  return {
    turtles,
    weapons,
    pizzas,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};
