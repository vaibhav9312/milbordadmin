/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_state', {
    StateId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StateName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CountryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'db_country',
        key: 'CountryId'
      }
    }
  }, {
    tableName: 'db_state',
    timestamps: false
  });
};
