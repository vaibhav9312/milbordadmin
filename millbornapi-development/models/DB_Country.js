/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_country', {
    CountryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CountryName: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    tableName: 'db_country',
    timestamps: false
  });
};
