/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_clientmainitems', {
    MainItemsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MainItemName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ClientTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'db_clienttype',
        key: 'ClientTypeId'
      }
    }
  }, {
    tableName: 'db_clientmainitems',
    timestamps: false
  });
};
