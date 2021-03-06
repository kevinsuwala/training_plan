module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define('Day', {
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
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
  return Day;
};
