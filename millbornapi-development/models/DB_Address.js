/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_address', {
    AddressId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RoleId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'db_roles',
        key: 'RoleId'
      }
    },
    UserId: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FullAddress: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    Area: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    StreetName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    HouseNumber: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    Pincode: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    },
    District: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    Landmark: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    CityId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StateId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'db_address',
    timestamps: false
  });
};
