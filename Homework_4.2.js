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
        userInput > 10 &&
        userInput !== `1` &&
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
    }else if(userInput.trim() === `2` || userInput.trim() === `3` || userInput.trim() === `5` || userInput.trim() === `7`){
        alert(`${userInput.trim()} is a prime number`);
    } else if (userInput === `1`) {
        alert(`not a prime number`);
    } else {
        alert(`Invalid number`);
        checkPrimeNum();
    }
}
checkPrimeNum();

//Юзер вводить число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь. 
//Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.


function checkNum() {
const userNumber =   prompt(`Enter hole number`);
let userValue = Number(parseInt(userNumber, 10)).toString().trim(); 
if (
    userValue > 0 &&
    userNumber !== null &&
    !isNaN(userNumber) &&
    userValue.trim() !== `0` &&
    userNumber.trim() !== '' &&
    Number.isInteger(+userNumber) &&
    !isNaN(userValue)
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
    }else if(+userValue === 1){
        alert(`This number CAN be 3^*`);
    }else{
        alert(`This number CANT be 3^*`);
    }
} else if(userNumber === null){
    alert(`As you wish`)
} else if(!Number.isInteger(+userNumber) && !isNaN(userNumber) && userNumber.trim() !== ''){
    alert(`Not a hole num`)
    checkNum();
} else {
    alert(`Invalid number`);
    checkNum();
}
}
checkNum();