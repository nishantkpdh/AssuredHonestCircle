//call() apply() bind()


const player1={
  name:'abc',
  skill:'xyz',
  life:2,
  resetlife:function(newdata){
    return this.life+=newdata;
  }
}

const player2={
  name:'def',
  skill:'stu',
  life:1
}


console.log(player2)
player1.resetlife.call(player2,5);
console.log(player2)