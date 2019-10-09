module.exports = function zeros(expression) {
  var str = expression;
  var re = /(\d+)(?=!!)/g;  
  var reX = /(\d+)(?=!)/g;

  var exist_pos;
  while ((m = reX.exec(str)) !== null) { 
    if (m[1] % 2 == 0) { 
      exist_pos = true;
    } 
  }   

  var arrRes = [];
  while ((m = re.exec(str)) !== null) { 
    var res = 0;

    if (m[1] % 2 == 0) { 
          if (m[1] / 50 >= 1) {res = 1;} 
          let n = m[1];
          while (n > 0) {
            n /= 10;
            res += Math.trunc(n);    
          }
          arrRes.push(res);
          str = str.replace(m[1], ' ');
    } else if (m[1] % 2 != 0 && exist_pos != true) { 
          let res = 0;
          arrRes.push(res);
          str = str.replace(m[1], ' ');
    } else if (m[1] % 2 != 0 && exist_pos == true && m[1] >= 5) { 
          let res = Math.trunc((parseInt(m[1], 10) + 5) / 10);
          if (m[1] >= 25 && m[1] < 75) {
            res = res + 1;
          } else if (m[1] >= 75 && m[1] < 100) {
            res = res + 2;
          }
          arrRes.push(res);
          str = str.replace(m[1], ' ');
    }
  }

  while ((m = reX.exec(str)) !== null) { 
    let n = m[1];
    let res = 0;
    while (n > 0) {
      n /= 5;
      res += Math.trunc(n);
    }
    arrRes.push(res);
    str = str.replace(m[1], ' ');
  }

  return (arrRes.reduce((a, b) => a + b, 0)); 
}
