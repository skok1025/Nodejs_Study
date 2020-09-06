const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('event1');
});

myEvent.on('event2', () => {
    console.log('event2');
});

myEvent.on('event2', () => {
    console.log('event2 add');
});

// event 발생 (emit)
myEvent.emit('event1');
myEvent.emit('event2');
// event 발생

// 한번만 실행되는 이벤트 등록
myEvent.once('event3', ()=> {
    console.log('event3');
});

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log('event4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('event5');
}

myEvent.on('event5', listener);

myEvent.on('event5', () => {
    console.log('event5 add');
});

// listener 를 하나씩 제거함.
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
