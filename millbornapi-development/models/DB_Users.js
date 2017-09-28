/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_users', {
    UserId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    IsActive: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    IsApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    UserRoleId: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'db_users',
    timestamps: false
  });
};
