
// let event = new EventEmitter;
// const CHILD = ['nom', 'prenom'];
// let getNumber =() => {
//     event.emit('randomNumber');
//     return Math.random();
// }
// module.exports ={ getNumber, CHILD, event};

var EventEmitter = require('events');
class RandomNumber extends EventEmitter{
    getNumber(){
        this.emit('randomNumber');
        return Math.random();
    }
}
module.exports = RandomNumber;