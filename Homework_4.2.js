//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const valueUAH = 40;
let valueUSD = 10;
while(valueUSD <= 100) {
    console.log(valueUSD * valueUAH);
    valueUSD += 10;
}

//Юзер вводить число. З'ясувати, чи є воно простим. Простим називається ціле число, більше ніж 1, яке не має інших дільників, 
//крім 1 і себе (1 не є простим).
function checkPrimeNum () {
    const userInput = prompt(`Enter prime number`);

if (
    userInput !== null &&
    !isNaN(userInput) &&
    userInput !== '0' &&
    userInput.trim() !== '' &&
    Number.isInteger(+userInput)
    ) {
    let i = 2;
    let isPrime = true;

    while (i <= 10) {
        if (userInput % i === 0) {
            alert(`not a prime number`);
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime) {
        alert(`${userInput} is a prime number`);
    }
} else if (userInput == null) {
    alert(`As you wish`)
}else {
    alert(`Invalid number`);
    checkPrimeNum();
}
}
checkPrimeNum();

//Юзер вводить число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь. 
//Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.


function checkNum() {
const userNumber = prompt(`Enter num`);
let userValue = Math.abs(parseInt(userNumber, 10)).toString().trim(); 
if (
    userNumber !== null &&
    !isNaN(userValue) &&
    userValue.trim() !== `0` &&
    userValue !== `` &&
    Number.isInteger(+userValue)
) {
    if (Number.isInteger(+userValue / 3)) {
        while (+userValue % 3 === 0) {
            userValue /= 3;
            if (userValue === 1) {
                alert(`This number CAN be 3^*`);
                break;
            } else if (userValue % 3 !== 0) {
                alert(`This number CANT be 3^*`);
                break;
            }
        }
    } else {
        alert(`This number CANT be 3^*`);
    }
} else if(userNumber === null){
    alert(`As you wish`)
} else {
    alert(`Invalid number`);
    checkNum();
}
}
checkNum();
