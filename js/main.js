"use strict";

// Урок 26. Динамическая типизация

// To String
console.log(typeof(String(null)));
console.log(typeof(String(null)));
const num = 5;
console.log();

// To Number
console.log(typeof(Number('hdg'))); /*- используют редко, так как есть унарный плюс */
console.log(typeof(+'hdg')); /*- унарный плюс */
console.log(typeof(parseInt('27px' + 23)));

// To Boolean
let switcher = null;
if (switcher){
    console.log('Working..'); 
}
switcher = 5;
if (switcher){
    console.log('Working..'); 
}

console.log(typeof(Boolean('7')));

console.log(typeof(!!'734'));

// Все, что мы получаем от пользователя, приходить в виде строки
// false - 0, '', null, undefined, NaN;

// Урок 26. Задачи с собеседований
/*Какое будет выведено значение: let x = 5; alert( x++ ); ? 
    5
 Чему равно такое выражение: [ ] + false - null + true ?
    NaN
 Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 
    2
 Чему равна сумма [ ] + 1 + 2? 
    12
 Что выведет этот код: alert( '1'[0] )?
    1
 Чему равно 2 && 1 && null && 0 && undefined?
    null  - && запинается на лжи
            ||  запинается на правде
 Есть ли разница между выражениями? !!(a && b) (a && b)?
    yes 
 Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
   3 -  Нужно посмотреть в таблицу преоритетов операторов
 a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
    а не равно b,  это две разные переменные с одинаковым содержанием
 Что выведет этот код: alert( +'Infinity'); ?
    Infinity (number)
 Верно ли сравнение: 'Ёжик' > 'яблоко' ?
    false
 Чему равно 0 || '' || 2 || undefined || true || falsе ? 
    2
*/
