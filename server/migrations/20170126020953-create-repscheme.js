module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('RepSchemes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ExerciseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      SessionId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      week: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      sets: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      reps: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      timeDone: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      distanceDone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      setsDone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      repsDone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weightDone: {
        type: Sequelize.INTEGER,
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
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('RepSchemes'),
};
