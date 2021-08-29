const events = require('events');
event = new events.EventEmitter();
event.on('my_event',()=>{console.log('this is my event')})

event_2_fun = function() {
    console.log('this is event 2');
}

event.on('my_event_2',event_2_fun)

// event.emit('my_event',2,4);
event.emit('my_event_2',2,4);