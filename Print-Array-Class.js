export const EventEmitter = require("events");
const fs = require("fs");

class PrintArray extends EventEmitter {
    constructor () {
        super();
        this.onPrintArray();
    }

    onPrintArray () {
        this.on("print array" , (namesArray) => {
            fs.writeFile("./infofile.txt" , namesArray.toString() , () => {})
        })
    };

    emitPrintArray (namesArray) {
     this.emit("print array" , namesArray);
    };
}

const printArrayInstance = new PrintArray () ;
module.exports = printArrayInstance ;