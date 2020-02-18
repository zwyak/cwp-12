module.exports = (Sequelize, sequelize) => {
  return sequelize.define('weapons', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    dps: {
      type: Sequelize.INTEGER
    }
  });
};
