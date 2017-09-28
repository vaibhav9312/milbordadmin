/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_products', {
    ProductId: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProductTitle: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    GroupId: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    SubGroupId: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    SubCategoryId: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    ProductDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Tags: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    MinimumQty: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    IsActive: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    IsDeleted: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    ProductImage: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'db_products',
    timestamps: false
  });
};
