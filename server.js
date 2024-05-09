const app = require('./bin/index');
const keys = require('./bin/kays');
const connection = require('./src/middleware/conection')

app.listen (keys.server.port, () => {
    connection.connect();
    console.log('KDo isqueiro');
});
