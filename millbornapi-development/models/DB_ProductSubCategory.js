/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_productsubcategory', {
    SubCategoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubCategory: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'db_productsubcategory',
    timestamps: false
  });
};
