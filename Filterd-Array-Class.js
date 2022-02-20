const EventEmitter = require("events") ;
const fs = require("fs");

class FilterdArray extends EventEmitter {
    constructor () {
        super () ;
        this.onPrintFilterd();
    }

    onPrintFilterd () {
        this.on("get array" , (numbersArray = []) => {
        fs.writeFile("./filterArray.txt" , numbersArray.filter(num => num > 18).toString() , () => {})
        });

    };

    emitPrintFilterd (numbersArray) {
      this.emit("get array" , numbersArray);
    }
};

let someArray = new FilterdArray () ;
module.exports = someArray ;