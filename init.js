db = db.getSiblingDB('test_database');

db.createCollection('test_collection');

db.createUser({
  user: 'myuser',
  pwd: 'mypassword',
  roles: [
    {
      role: 'readWrite',
      db: 'test_collection',
    },
  ],
});
