'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Server extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Server.init(
        {
            url: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Server',
        }
    );
    return Server;
};
