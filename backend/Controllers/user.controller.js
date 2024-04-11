const User = require("../Models/User");
const userController = {};

userController.saveUser = async(userName, socketId) => {
    // 중복되는 유저인지 확인
    let user = await User.findOne({ name: userName });

    // 새로운 유저라면 정보 생성
    if(!user) {
        user = new User({
            name: userName,
            token: socketId,
            online: true,
        });
    }

    // 이미 존재하는 유저라면 연결 정보 token값 수정
    user.token = socketId;
    user.online = true;

    await user.save();

    return user;
};

userController.checkUser = async(socketId) => {
    const user = await User.findOne({ token: socketId });

    if(!user) throw new Error("존재하지 않는 유저입니다.");
    
    return user;
}

module.exports = userController;