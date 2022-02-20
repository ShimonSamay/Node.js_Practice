const fs = require("fs");
const EventEmiter = require("events") ;



// for (let i = 0; i <= 14; i++) {
//    console.log(i);
// }

// let namesArray = ["a", "b", "c", "d", "e"];
// console.log(...namesArray);

 
 

// let randomNumbersArray = [];
// for (let i = 0; i <= 16; i++) {
//   randomNumbersArray[i] = Math.round(Math.random() * 10);
//   randomNumbersArray[i] % 2 === 0 ? console.log( randomNumbersArray[i]): "";
// }

// fs.writeFile("./test.txt" , randomNumbersArray.toString() , () => {})
// fs.readFile("./test.txt" , (err , res) => {
//     if(err) throw err ;
//     console.log(res.toString());
// })

// let secondNamesArray = ["shimon" , "hjjh" , "jkj" , "jjj"];
// fs.writeFile("./secondtest.txt" , secondNamesArray.toString() , () => {})

// fs.readFile("./secondtest.txt" , (err , result) => {
//     if(err) throw err ;
//     let array = result.toString().split(",");
//     for(let item of array){
//         item.startsWith("s") ? console.log(item) : ""
//     }
// } );

// let randomNumbers  = [] ;
// for (let i  = 0 ; i <= 12  ; i++){
//     randomNumbers[i] = Math.round(Math.random()*100);
// }
// // console.log(randomNumbers);


// fs.writeFile("./thirdtest.txt", randomNumbers.filter(num => num % 3 == 0).toString() , () => {})
// fs.readFile("./thirdtest.txt" , (err , res) => {
//  if(err) throw err ;
//  let filterdArray = res.toString().split(",").filter(num => num > 50);
//  console.log(filterdArray);
// });

// const printName = require("./Events-Class");
// printName.emitPrintName("jack");

// const printEvenet = require("./Print-Class");
// printEvenet.emitPrint("./print.txt");

// const printInstance = require("./Print-Info");
// printInstance.emiPrintInfo("./infofile.txt" , "shimon samay");

// const printArrayInstance = require("./Print-Array-Class");
// printArrayInstance.emitPrintArray(["shimon" , "amir" , "avi"]);

// class printNames extends EventEmiter {} ;

// const printNameInstance = new printNames () ;

// printNameInstance.on("print" , (printAmount) => {
//     for (let i = 0 ; i < printAmount ; i++) {
//         console.log("hello there");
//     }
// });

// printNameInstance.emit("print" , 3);

// const filterdInstanace = require("./Filterd-Array-Class");
// filterdInstanace.emitPrintFilterd([20 , 5 , 3 , 21]);


