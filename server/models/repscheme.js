module.exports = (sequelize, DataTypes) => {
  const RepScheme = sequelize.define('RepScheme', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ExerciseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      SessionId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      week: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      distance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sets: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reps: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      timeDone: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      distanceDone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      setsDone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      repsDone: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
      },
      weightDone: {
        type: DataTypes.INTEGER,
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
  return RepScheme;
};
