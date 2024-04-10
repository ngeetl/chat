module.exports = function(io) {
    // 듣는 함수, socket인자: 연결된 정보
    io.on("connection", async(socket) => {
        console.log("socket.io 연결 성공", socket.id);
    });
};