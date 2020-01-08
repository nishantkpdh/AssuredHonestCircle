//call() apply() bind()

// const num=100
// function Value(){
//   console.log(`value is ${num}`)
//   console.log(`value is ${this.num}`)
// }
// function Getsamenumber(){
//   console.log(`value is same ${this.num}`)
// }
// var obj1 = { num : 200 , value: Getsamenumber };
// obj1.value()


// const obj={
//   name:"abc",
//   dance:function(){
//     console.log(this);
//     var cook=(function(){
//       console.log(this)
//     }.bind(this))();
//     cook;
//   }
// }
// obj.dance()

Date.prototype.lastyear=function(){
  return this.getFullYear()-1
}
var data=new Date('1990-10-10').lastyear();
console.log(data);



