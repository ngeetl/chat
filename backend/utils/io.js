const chatController = require("../Controllers/chat.controller");
const userController = require("../Controllers/user.controller");

module.exports = function (io) {
    // io: 서버, socket인자: 연결된 정보
    io.on("connection", async (socket) => {
        console.log("socket.io: 연결 성공", socket.id);

        // login
        socket.on("login", async (userName, cb) => {
            // 유저 정보 저장
            try {
                const user = await userController.saveUser(userName, socket.id);
                cb({ ok: true, data: user });
            } catch (err) {
                cb({ ok: false, error: err.message });
            }
        });

        // message
        socket.on("sendMessage", async (message, cb) => {
            try {
                // socket id로 유저 찾기
                const user = await userController.checkUser(socket.id);

                // 메세지 저장(유저)
                const newMessage = await chatController.saveChat(message, user);

                // 서버에 연결된 모든 client에게 newMessage를 전송
                io.emit("message", newMessage);

                cb({ ok: true });
            } catch (err) {
                cb({ ok: false, error: err.message });
            }

        });

        // disconnect
        socket.on("disconnect", () => {
            console.log("socket.io: 유저 연결이 해제되었습니다.")
        });
    });
};