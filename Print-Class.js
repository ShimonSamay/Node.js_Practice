const EventEmitter  = require("events");
const fs= require("fs");

class PrintEvent extends EventEmitter {
    constructor () {
        super();
        this.printWhenListening();
    }

    printWhenListening () {
        this.on("print" , (fileName)=>{
        fs.writeFile(fileName , "I am listening" , () => {})
        })
    }

    emitPrint (fileName) {
     this.emit("print" , fileName);
    }

}

const printEvevnt = new PrintEvent () ;
module.exports = printEvevnt ;