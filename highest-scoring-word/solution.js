function high(x) {
    let counterArr = [];
  
   x.split(' ').forEach(function (word, idx) {
      let counterNum = 0;
      word.split('').forEach(function (letter, idx) {
        counterNum += parseInt(letter, 36)-9;
        if (idx == word.split('').length-1) {
          counterArr.push(counterNum);
        }
      });
    });
    
   return x.split(' ')[counterArr.reduce((iMax, x, i, arr) => x > counterArr[iMax] ? i : iMax, 0)];
  }