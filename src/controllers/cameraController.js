import cameraService from '../services/cameraService';

let handleCreateListCameraFromServer = async (req, res) => {
    let message = await cameraService.createCameraAndServer(req.body);
    return res.status(200).json(message);
};

module.exports = {
    handleCreateListCameraFromServer: handleCreateListCameraFromServer,
};
