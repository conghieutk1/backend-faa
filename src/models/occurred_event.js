'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Occurred_Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Occurred_Event.init(
        {
            cameraId: DataTypes.INTEGER,
            eventId: DataTypes.INTEGER,
            time: DataTypes.STRING,
            linkImage: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Occurred_Event',
        }
    );
    return Occurred_Event;
};
