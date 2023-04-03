// ESM
import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';

async function dbConnector(fastify, options) {
  fastify.register(fastifyMongo, {
    url: 'mongodb://myuser:mypassword@localhost:27017/test_database',
  });
}

export default fastifyPlugin(dbConnector);
