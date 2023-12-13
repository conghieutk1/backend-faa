'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Camera extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Camera.init(
        {
            cameraName: DataTypes.STRING,
            groupId: DataTypes.INTEGER,
            serverId: DataTypes.INTEGER,
            status: DataTypes.STRING,
            authenticationId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Camera',
        }
    );
    return Camera;
};
