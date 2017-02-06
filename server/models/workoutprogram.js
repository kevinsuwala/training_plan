module.exports = (sequelize, DataTypes) => {
  const WorkoutProgram = sequelize.define('WorkoutProgram', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfWeeks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      repeatedWeeks: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
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
  return WorkoutProgram;
};
