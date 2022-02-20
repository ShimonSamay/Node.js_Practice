const EventEmitter = require("events") ;
const  fs = require("fs");

class PrintInfo extends EventEmitter {
    constructor () {
        super () ;
        this.onDataGet();
    }

    onDataGet () {
        this.on("print info" , (fileName , info) => {
         fs.writeFile(fileName , info , () => {})
        })
    }

    emiPrintInfo (fileName , info) {
        this.emit("print info" , fileName , info)
    }
}

const printInfoInstance = new PrintInfo () ;
module.exports = printInfoInstance ;