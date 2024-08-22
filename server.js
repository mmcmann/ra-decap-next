// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults({ noCors: true })

// server.use(middlewares)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
server.use('/mock', router);
server.listen(6800, () => {
  console.log('Mock api server listening at localhost:6800');
});
