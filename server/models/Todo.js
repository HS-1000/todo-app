
const Todo = (Sequelize, DataTypes) => {
  const model = Sequelize.define('todo', {
    id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title : {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    done : {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: "todo",
    freezeTableName: true,
    timestamps: false,
  });
}

module.exports = Todo;