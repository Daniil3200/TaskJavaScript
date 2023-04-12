console.error("TaskJS#1");
console.log("Hello World!!");

console.error("TaskJS#2");
var num = 1;
console.log("Пример: " + (num) + " + " + (num) + " = " + (num + num) )


console.error("TaskJS#3");
var num_1 = "23";
var num_2 = "8";
var num_3; var num_4; 
console.log("Сложение строк: " + ( num_3 = num_1 + num_2));
console.log("Сложение чисел: " + ( num_4 = Number(num_1) + Number(num_2)));
console.log("Общая сумма: " + (Number(num_3) + num_4));


console.error("TaskJS#4");

var strk = ["Number", "2", "4", "world", "36", "stroka", "3", "home", "8", "3"];

var num = [3, 4, 7, 1, 5, 8, 9, 3, 6, 7,];
var same = 0;var less = 0;var more = 0; var y = -1;
console.log("Числовой массив")
for(var i= 0;i<10;i++){
  console.log("Шаг: " + i);
  if(num[i] == 3){same++;}
 else if(num[i] < 3){less++;}  
 else {more++;}
}

console.log("Строчный массив")
for(var i= 0;i<10;i++){
  console.log("Шаг: " + i);
  if(Number(strk[i]) == 3){same++;}
 else if(Number(strk[i]) < 3){less++;}  
 else if(Number(strk[i]) > 3){more++;}
 else console.log("Число не найдено")
}
 console.log("В строке чисел равных 3: " + same + " Меньше 3: " + less + " Больше 3: " + more); 
