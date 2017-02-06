module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      WorkoutProgramId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      RepSchemeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      timeCompleted: {
        type: Sequelize.DATE,
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
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Sessions'),
};
