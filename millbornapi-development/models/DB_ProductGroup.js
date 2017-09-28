/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_productgroup', {
    GroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Group: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'db_productgroup',
    timestamps: false
  });
};
