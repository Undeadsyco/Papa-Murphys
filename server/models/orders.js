/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    paid_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    change: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    order_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    order_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'orders'
  });
};
