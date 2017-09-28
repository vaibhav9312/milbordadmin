/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_productsubgroup', {
    SubGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubGroup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    GroupId: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'db_productsubgroup',
    timestamps: false
  });
};
