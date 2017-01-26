module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      dayId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      repSchemeId: {
        allowNull: false,
        type: DataTypes.UUID,
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
  return Exercise;
};
