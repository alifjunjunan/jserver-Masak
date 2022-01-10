const jsonServer = require('json-server'); //libary json-server
const server = jsonServer.create();
const router = jsonServer.router('db-json'); //identifikasi routing url dari json-server yang terhubung dengan bd
const middlewares = jsonServer.defaults(); //menjadikan json-server sebagai route url utama
const port = process.env.PORT || 3000; // konfigurasi port json-server

server.use(middlewares)
server.use(router)

server.listen(port)