/*module.exports = function zeros(expression) {
  var str = expression;
  var re = /(\d+)(?=!!)/g; // ------регулярные выражения      https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
  //--- /{(\d+)}/g  --- вытягивает все числа внутри скобок {_}
  //--- /\{([^\}]*)\}/  
  //--- /\*([^\!!]*)\!!/g  --- вытягивает все числа внутри скобок *_!!
  var arrRes = [];
  while ((m = re.exec(str)) !== null) { //----Работа с двойными факториалами
    if (m[1] % 2 == 0) {
      let n = m[1];
      let res = 0;
      while (n >= 1) {
        n /= 10;
        res += n;
      }
      arrRes.push(Math.trunc(res));
      str = str.replace(m[1], ' ');
    } else if (m[1] % 2 != 0) {
      let res = 0;
      arrRes.push(res);
      str = str.replace(m[1], ' ');
    }
  }
  var reX = /(\d+)(?=!)/g;
  while ((m = reX.exec(str)) !== null) { //----Работа с обычными факториалами
    let n = m[1];
    let res = 0;
    while (n >= 1) {
      n /= 5;
      res += n;
    }
    arrRes.push(Math.trunc(res));
    str = str.replace(m[1], ' ');
  }
  

  return (arrRes.reduce((a, b) => a + b, 0));
} */

/*
let expression = '6!';
console.log(expression);

//----- поиск в строке чисел и запись их в массив http://qaru.site/questions/157629/how-to-find-a-number-in-a-string-using-javascript 
    var exampl = /\d+/g; // эквивалентно--  new RegExp("\d+")
    var number;              
    var arrText = [];     
    while ((number = exampl.exec(expression)) != null) {
      arrText.push(number[0]);
    }                           
//-----

//***** разложение факториала по множителям (по 5)
    var res = 0;
    for (let i=0; i<=arrText.length ;i++) {
      let n = arrText[i];
      while (n >= 1) {
        n /= 5;
        res += n;
      }
    }
    console.log(Math.trunc(res));   // целая часть от числа
    
//*****
*/




    var str = '9!!*10!!*7!!';
    var re = /(\d+)(?=!!)/g;  // ------регулярные выражения      https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
          //--- /{(\d+)}/g  --- вытягивает все числа внутри скобок {_}
          //--- /\{([^\}]*)\}/  
          //--- /\*([^\!!]*)\!!/g  --- вытягивает все числа внутри скобок *_!!
    var arrRes = [];
    while ((m = re.exec(str)) !== null) {  //----Работа с двойными факториалами
      if (m[1] % 2 == 0) {
        let n = m[1];
        let res = 0;
        while (n >= 1) {
          n /= 10;
          res += n;
        }
        arrRes.push(Math.trunc(res));
        str = str.replace(m[1], ' ');
      } else if (m[1] % 2 != 0) {
        let res = 0;
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      }
    }
    var reX = /(\d+)(?=!)/g;
    while ((m = reX.exec(str)) !== null) { //----Работа с обычными факториалами
        let n = m[1];
        let res = 0;
        while (n >= 1) {
          n /= 5;
          res += n;
        }
        arrRes.push(Math.trunc(res));
        str = str.replace(m[1], ' ');
    }
    console.log(arrRes.reduce((a, b) => a + b, 0))


// console.log(arrText);
// console.log(arrRes, str);

