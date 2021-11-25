/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    User_id: {
      type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    User_Name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Birthday: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Password: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    Start_Date: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    End_Date: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'employee'
  });
};
