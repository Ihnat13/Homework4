
/* Розписати покроково, що робить програма:
1) оголоcити numbers

2) присвоїти numbers масив з 7 елементів 5, 8, -1,'-6', 11, 'ololo', '-2' : numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']

3) оголосити sum

4) присвоїти sum 0: sum = 0

5) оголосити i

6) присвоїти i 0: i = 0

7) перевірити, чи i менше довжини масиву: 0 < numbers.length => 0 < 7 - так

8) присвоїти sum попереднє значення та додати 0-й елемент масиву: sum = 0 + 5 = 5

9) збільшити i на одиницю: i = 1

10) перевірити, чи i менше довжини масиву: 1 < numbers.length => 1 < 7 - так

11) присвоїти sum попереднє значення та додати 1-й елемент масиву: sum = 5 + 8 = 13

12) збільшити i на одиницю: i = 2

13) перевірити, чи i менше довжини масиву: 2 < numbers.length => 2 < 7 - так

14) присвоїти sum попереднє значення та додати 2-й елемент масиву: sum = 13 + (-1) = 12

15) збільшити i на одиницю: i = 3

16) перевірити, чи i менше довжини масиву: 3 < numbers.length => 3 < 7 - так

17) присвоїти sum попереднє значення та додати 3-й елемент масиву: sum = 12 + '-6' = `12-6`         // превратили из числа в стрингу путем конкатенации

18) збільшити i на одиницю: i = 4

19) перевірити, чи i менше довжини масиву: 4 < numbers.length => 4 < 7 - так

20) присвоїти sum попереднє значення та додати 4-й елемент масиву: sum = `12-6` + 11 = `12-611`          

21) збільшити i на одиницю: i = 5

22) перевірити, чи i менше довжини масиву: 5 < numbers.length => 5 < 7 - так

23) присвоїти sum попереднє значення та додати 5-й елемент масиву: sum = `12-611` + `ololo` = `12-611ololo`          

24) збільшити i на одиницю: i = 6

25) перевірити, чи i менше довжини масиву: 0 < numbers.length => 6 < 7 - так

26) присвоїти sum попереднє значення та додати 6-й елемент масиву: sum = `12-611ololo` + `-2` = `12-611ololo-2`          

27) збільшити i на одиницю: i = 7

28) перевірити, чи i менше довжини масиву: 7 < numbers.length => 7 < 7 - ні

29) вивести повідомлення 'Sum is ' + sum
*/


/* на якій ітерації програма перестала коректно рахувати суму чисел (чому дорівнює i)?
когда i = 3 , потому что след тип данных был строка и из сложения с присваиванием мы стали делать конкатенацию
*/

// const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     if(!isNaN(numbers[i])) {
//         sum += +numbers[i]
//     }

// }

// alert('Sum is ' + sum)
