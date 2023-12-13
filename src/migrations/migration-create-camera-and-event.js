'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Camera_And_Event', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            cameraId: {
                type: Sequelize.INTEGER,
            },
            eventId: {
                type: Sequelize.INTEGER,
            },
            eventTrackingStatus: {
                type: Sequelize.STRING,
            },
            eventConfigData: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Camera_And_Event');
    },
};
