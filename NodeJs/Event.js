const EventEmitter = require('events');
const emitter = new EventEmitter();
// Register listeners

emitter.on('messageLogged', function(message) {
    console.log("Listner Called", message);
});

// Raise an event
emitter.emit('messageLogged',"Saksham");
