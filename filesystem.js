const fs = require('fs');
const EventEmitter = require('events');
class FileSystem extends EventEmitter {
    fileCreated() {
        fs.mkdir('./folder', (error) => {
            if (error) console.log(error);
            fs.writeFile('./folder/hello.txt', 'hello world', (fileError) => {
                if (fileError)  console.error(fileError);
                this.emit('fileCreated');
            });
        }) 
    }
}
module.exports = FileSystem;