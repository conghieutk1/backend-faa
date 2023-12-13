'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group_Camera extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Group_Camera.init(
        {
            groupName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Group_Camera',
        }
    );
    return Group_Camera;
};
