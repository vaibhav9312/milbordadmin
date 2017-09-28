/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_city', {
    CityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CityName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    StateId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'db_state',
        key: 'StateId'
      }
    }
  }, {
    tableName: 'db_city',
    timestamps: false
  });
};
