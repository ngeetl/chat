const {createServer} = require("http");
const app = require("./app");
const {Server} = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000"
    }
});

require("./utils/io")(io);

httpServer.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}에서 서버가 열렸습니다!`)
});