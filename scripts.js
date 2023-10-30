// задание 1
// Выведите числа от 1 до 50 и от 35 до 8.

/*for (let number = 1; number <= 50; number++) {
  console.log(number);
}


for (let number2 = 35; number2 >= 8; number2--) {
    console.log(number2);
}
*/
//задание 2
/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/


/*let i = 89;
while ( i >= 11) {
    console.log(i);
    i--
}
*/
//задание 3
//С помощью цикла найдите сумму чисел от 0 до 100.

/*let a = 100,
    sum = 0;
for (let b = 0; b <= a; b++) {
    sum += b
}
console.log(sum);
*/
// задание 4
/*Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/

/*let m = 5,
    sum1 = 0;
for (let n = 1; n <= m; n++) {
    sum1 += n
    console.log(sum1);
}
*/
 // задание 5
//Выведите чётные числа от 8 до 56. Решить задание через while и for
/*
 //  вар 1
for (let d = 8; d <= 56; d++) {
    if (d % 2 == 1) continue;
        console.log(d);
}
// вар 2 , для исключения повтора переменная d заменена на с

let c = 6;
while (c <= 56) {
    c++
    if (c % 2 == 1) continue;
        console.log(c);
}
*/
// задание 6
//Необходимо вывести на экран полную таблицу умножения (от 2 до 10) 

/*for (let k = 2; k <= 10; k += 1) {
    for (let l = 1; l <= 10; l += 1) {
        console.log(`${k} x ${l} = ${k * l}`);
    }
      console.log(`   `);
}
*/
//задание 7
/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num*/

/*let num = 0;

for (let n = 1000; n > 50; n /= 2) {
    console.log(n);
    num ++
}
console.log(num);
*/

//задание 9
/*Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

/*let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

let min = str[0];
let max = str[0];
let newstr = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] == '') {
        newstr = +newstr;

        if (min > newstr) {
            min = newstr;
        }

        if (max < newstr) {
            max = newstr;
        }

        console.log(newstr);
        newstr = '';
        continue;
} else {
    newstr += str[i];
}
}
console.log(min, max);

*/
// Задание 10
/*Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.*/

let str = prompt ('Add number');
let count = 0;
let sumstr = 0;
let reverse = '';

for (let i = 0; i < str.length; i++) {
    console.log (str[i]);
    //count = str.length
    count ++;
    sumstr += +str[i];
}
console.log (count);

for (let i = str.length-1; i >= 0; i--) {
      reverse += str[i];
}
console.log ('вводится число '+ str );
console.log ('цифр в числе ' + count);
console.log ('сумма цифр ' + sumstr ,'обратный порядок ' + reverse);


