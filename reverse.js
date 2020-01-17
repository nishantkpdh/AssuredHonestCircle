
function reversvalue(value){
  let newvalue=[]
  for(let i=value.length;i>=0;i--){
    newvalue.push(value[i])
  }

  let values=newvalue.filter(value=>value!=undefined).join('')
  return values;
}
function reversestring(str){
  let arr=[];
  let val=str.split(" ").reverse();
  for(let i=0;i<val.length;i++){
    let rev=arr.push(reversvalue(val[i]))
  }
  console.log(arr.join(' '))
}


reversestring("Hi My Name is Nishant");