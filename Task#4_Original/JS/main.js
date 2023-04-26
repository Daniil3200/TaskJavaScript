console.error("TaskJS#4_Original");

var strk = ["Number", "2", "4", "world", "36", "stroka", "3", "home", "8", "3"];

var num = [3, 4, 7, 1, 5, 8, 9, 3, 6, 7,];


console.log("Числовой массив: "+ num)


console.log("Строчный массив: "+ strk)

console.log("Равны ли элементы "+ strk[3]+ " и "+ num[3]+ "?")

if (num[3]=Number(strk[3]))
console.log("Элементы массивов с индексом 3 равны.")
else if (Number(strk[3])!=num[3])
console.log("Элементы массивов с индексом 3 НЕ равны.")
else console.error("Ошибка"); 
