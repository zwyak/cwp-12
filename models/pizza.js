module.exports = (Sequelize, sequelize) => {
  return sequelize.define('pizzas', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  calories: {
    type: Sequelize.DOUBLE
  }
  });
};
