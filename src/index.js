/*module.exports = function zeros(expression) {
  var str = expression;
  var re = /(\d+)(?=!!)/g; // ------регулярные выражения      https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
  //--- /{(\d+)}/g  --- вытягивает все числа внутри скобок {_}
  //--- /\{([^\}]*)\}/  
  //--- /\*([^\!!]*)\!!/g  --- вытягивает все числа внутри скобок *_!!
  var reX = /(\d+)(?=!)/g;

    var exist_pos;
    while ((m = reX.exec(str)) !== null) { //----Проверка наличие обычного факториала
      if (m[1] % 2 == 0) { //-- и удаление всех 1!
        exist_pos = true;
      } else if (m[1] == 1) {
        str = str.replace(m[1], ' ');
      }
    }

    var arrRes = [];
    while ((m = re.exec(str)) !== null) { //----Работа с двойными факториалами
      var res = 0;

      if (m[1] % 2 == 0) { //--- четные двойные факториалы
        if (m[1] / 50 >= 1) {
          res = 1;
        } //--- проверка четн. двоичного факт. на условие > 50!
        let n = m[1];
        while (n > 0) {
          n /= 10;
          res += Math.trunc(n);
        }
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      } else if (m[1] % 2 != 0 && exist_pos != true) { //--- НЕчетные двойные факториалы
        let res = 0;
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      } else if (m[1] % 2 != 0 && exist_pos == true && m[1]>=5) { //--- НЕчетные двойные факториалы
        let res = Math.trunc((parseInt(m[1], 10) + 5) / 10);
        if (parseInt(m[1], 10) >= 25) {
          res = res + 1;
        } //else if (parseInt(m[1], 10) >= 75 && parseInt(m[1], 10) < 100) {res = res + 2;}
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      }
    }
    var reX = /(\d+)(?=!)/g;
    while ((m = reX.exec(str)) !== null) { //----Работа с обычными факториалами
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
*/
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




    var str = '1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!*1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!';
    var re = /(\d+)(?=!!)/g;  // ------регулярные выражения      https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
          //--- /{(\d+)}/g  --- вытягивает все числа внутри скобок {_}
          //--- /\{([^\}]*)\}/  
          //--- /\*([^\!!]*)\!!/g  --- вытягивает все числа внутри скобок *_!!
    var reX = /(\d+)(?=!)/g;
    
    var exist_pos;
    while ((m = reX.exec(str)) !== null) { //----Проверка наличие обычного факториала
      if (m[1] % 2 == 0) { //-- и удаление всех 1!
        exist_pos = true;
      } else if (m[1] == 1 || m[1] == 3) {
        str = str.replace(m[1], ' ');
      }
    }

    var arrRes = [];
    while ((m = re.exec(str)) !== null) { //----Работа с двойными факториалами
      var res = 0;

      if (m[1] % 2 == 0) { //--- четные двойные факториалы
        if (m[1] / 50 >= 1) {
          res = 1;
        } //--- проверка четн. двоичного факт. на условие > 50!
        let n = m[1];
        while (n > 0) {
          n /= 10;
          res += Math.trunc(n);
        }
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      } else if (m[1] % 2 != 0 && exist_pos != true) { //--- НЕчетные двойные факториалы
        let res = 0;
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      } else if (m[1] % 2 != 0 && exist_pos == true && m[1] >= 5) { //--- НЕчетные двойные факториалы
        let res = Math.trunc((parseInt(m[1], 10) + 5) / 10);
        if (parseInt(m[1], 10) >= 25) {
          res = res + 1;
        } //else if (parseInt(m[1], 10) >= 75 && parseInt(m[1], 10) < 100) {res = res + 2;}
        arrRes.push(res);
        str = str.replace(m[1], ' ');
      }
    }
    var reX = /(\d+)(?=!)/g;
    while ((m = reX.exec(str)) !== null) { //----Работа с обычными факториалами
      let n = m[1];
      let res = 0;
      while (n > 0) {
        n /= 5;
        res += Math.trunc(n);
      }
      arrRes.push(res);
      str = str.replace(m[1], ' ');
    }
    console.log(arrRes.reduce((a, b) => a + b, 0))


// console.log(arrText);
console.log(arrRes, str);

