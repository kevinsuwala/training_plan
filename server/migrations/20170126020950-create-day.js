module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      workoutProgramId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Days'),
};
