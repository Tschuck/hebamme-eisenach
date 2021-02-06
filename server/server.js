const fastify = require('fastify');
const fastifyStatic = require('fastify-static');
const path = require('path');

const server = fastify({
  disableRequestLogging: true,
  logger: {
    level: 'debug',
    prettyPrint: true,
    base: {
      pid: process.pid,
      hostname: 'SERVER'
    }
  },
});

server.register(fastifyStatic, {
  root: path.resolve('./app'),
});

server.listen(1990, '0.0.0.0', (err) => {
  if (err) {
    server.log.error(err.message);
    process.exit(1);
  }
});
