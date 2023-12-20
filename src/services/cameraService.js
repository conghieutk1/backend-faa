import db from '../models/index';

let checkExistCamera = (authenticationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let camera = await db.Camera.findOne({
                where: { authenticationId: authenticationId },
            });
            if (camera) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let checkExistServer = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let server = await db.Server.findOne({
                where: { url: url },
            });
            if (server) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};
let createCameraAndServer = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('data: ', data);
            let isExistServer = await checkExistServer(data.dataServer.server);

            if (isExistServer) {
                resolve({
                    errCode: 1,
                    errMessage: 'This server is already in the system',
                });
            } else {
                let createdServer = await db.Server.create({
                    url: data.dataServer.server,
                    username: data.dataServer.username,
                    password: data.dataServer.password,
                    userId: data.userInfo.id,
                });

                for (let i = 0; i < data.arrCameras.length; i++) {
                    let isExistCamera = await checkExistCamera(
                        data.arrCameras[i].Id
                    );
                    if (!isExistCamera) {
                        await db.Camera.create({
                            cameraName: data.arrCameras[i].Name,
                            serverId: createdServer.id,
                            status: 'OFFLINE',
                            authenticationId: data.arrCameras[i].Id,
                        });
                    }
                }

                resolve({
                    errCode: 0,
                    errMessage: 'Create camera and server successfully',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createCameraAndServer: createCameraAndServer,
};
