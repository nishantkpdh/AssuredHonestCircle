// // Function.prototype.bind = function(whoIsCallingMe){
//   const self = this;
//   return function(){
//     return self.apply(whoIsCallingMe, arguments);
//   };
// }


function checkuseridentity(){

  var temp={}
  function passportno () {
    if(this.passport.length>6){
      console.log(this.name +' has valid passport');
    }
    else
    {
      console.log("not a valid passport");
    }
  }
 
  const userdetail=(detail)=>{
    if(detail.name===null){
      return "invalid name";
    }
    if(detail.passport===null){
      return "invalid passportno";
    }
    else{
      temp=Object.assign({},detail);    
      let input= passportno.bind(temp);
      input();
      return true;
    }
  }
  return{
    userdetail:userdetail,
  }
}


const test= checkuseridentity();
test.userdetail({name:'xyx',passport:'RJ3dsds2'})

