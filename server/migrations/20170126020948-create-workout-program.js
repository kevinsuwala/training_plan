module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('WorkoutPrograms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numberOfWeeks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      repeatedWeeks: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('WorkoutPrograms'),
};
