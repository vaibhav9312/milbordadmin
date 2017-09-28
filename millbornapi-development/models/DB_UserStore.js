/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_userstore', {
    StoreId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    },
    BannerImage: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ProfileImage: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    AddressId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'db_address',
        key: 'AddressId'
      }
    },
    ContactNumber: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    EmailId: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    StoreName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    }
  }, {
    tableName: 'db_userstore',
    timestamps: false
  });
};
