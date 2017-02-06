module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      WorkoutProgramId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      RepSchemeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      timeCompleted: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
  }, { });
  return Session;
};
