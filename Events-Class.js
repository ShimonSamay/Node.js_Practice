const EventEmitter = require("events");

class myEvents extends EventEmitter {
    constructor() {
        super();
        this.onPrintName();
    }

    onPrintName ()  {
     this.on("print name" , (data) => {
      console.log(`hello ${data}`);
     });
    }

    emitPrintName (data) {
        this.emit("print name" , data);
    }
} 
 const printNameEvenet = new myEvents () ;
 module.exports = printNameEvenet ;