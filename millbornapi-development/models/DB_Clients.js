/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_clients', {
    ClientId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ClientCode: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    ClientTypeId: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      references: {
        model: 'db_clienttype',
        key: 'ClientTypeId'
      }
    },
    FirmName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    OwnerName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    MobileNumber: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    AlterNateNumber: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    WhatsAppNumber: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    GSTNumber: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    GSTName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    GSTAddress: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    MainItemIds: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.INTEGER(4),
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
      type: DataTypes.INTEGER(4),
      allowNull: true,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    },
    IsActive: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    IsVerified: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    VerifiedBy: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      references: {
        model: 'db_users',
        key: 'UserId'
      }
    },
    VerifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    VerificationComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MainItemTexts: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    OtherMainItem: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    tableName: 'db_clients',
    timestamps: false
  });
};
