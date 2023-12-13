'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Camera_And_Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Camera_And_Event.init(
        {
            cameraId: DataTypes.INTEGER,
            eventId: DataTypes.INTEGER,
            eventTrackingStatus: DataTypes.STRING,
            eventConfigData: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Camera_And_Event',
        }
    );
    return Camera_And_Event;
};
