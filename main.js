//Scope Chain
let thirdfun=(value)=>{
  if(value){
    return console.log("u are correct");
  }else{
    return console.log('u are not correct');
  }
}
let secondfun=(len)=>{
  const check=len>6?true:false;
  return thirdfun(check)
}
let firstfun=(value)=>{
  const len=value.length;
  return secondfun(len);
}

firstfun("nisht")