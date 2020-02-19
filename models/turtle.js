module.exports = (Sequelize, sequelize) => {
  return sequelize.define('turtles', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
    weaponId: {
      type: Sequelize.INTEGER,
    },
    firstFavoritePizzaId: {
      type: Sequelize.INTEGER,
    },
    secondFavoritePizzaId: {
      type: Sequelize.INTEGER,
    }
  });
};
