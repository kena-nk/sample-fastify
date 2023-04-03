// ESM
import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';

async function dbConnector(fastify, options) {
  fastify.register(fastifyMongo, {
    url: 'mongodb://root:example@localhost:27017',
  });
}

export default fastifyPlugin(dbConnector);
