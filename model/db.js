var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error ...'));
db.once('open', function() {
    console.log('db : mongodb connected.');
});
