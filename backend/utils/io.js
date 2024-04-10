const userController = require("../Controllers/user.controller");

module.exports = function(io) {
    // 듣는 함수, socket인자: 연결된 정보
    io.on("connection", async(socket) => {
        console.log("socket.io: 연결 성공", socket.id);

        // login
        socket.on("login", async(userName, cb) => {
            // 유저 정보 저장
            try {
                const user = await userController.saveUser(userName, socket.id);
                cb({ ok: true, data: user });
            } catch(err) {
                cb({ ok: false, error: err.message });
            }
        });

        // disconnect
        socket.on("disconnect", () => {
            console.log("socket.io: 유저 연결이 해제되었습니다.")
        });
    });
};