function checkAB(num) {
  // you can only write your code here!
  var counta = [];
  var countb =[];
  for (var i=0; i<num.length; i++) {
    if (num[i] === "a") {
      counta.push(i)
    } else if (num[i] === "b") {
      countb.push(i)
    }
  }
  var range = Number;
  var range1 =[]
  for (var j=0; j<counta.length; j++) {
    for (var k=0; k<countb.length; k++){
      range = Math.abs(counta[j] - countb[k])
      range1.push(range)
    }
  }
  var range2 =[]
  for (var l=0; l<range1.length; l++){
    if (range1[l]>=3){
      range2.push(range1[l])
    }
  }
  if (range2.length>=1) {
    return true
  } else {
    return false
  }  
}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false