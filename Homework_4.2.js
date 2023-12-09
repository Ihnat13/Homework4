//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const valueUAH = 40;
let valueUSD = 10;
while(valueUSD <= 100) {
    console.log(valueUSD * valueUAH);
    valueUSD += 10;
}

//Юзер вводить число. З'ясувати, чи є воно простим. Простим називається ціле число, більше ніж 1, яке не має інших дільників, 
//крім 1 і себе (1 не є простим).
function checkPrimeNum() {
    const userInput = prompt(`Enter prime number`);

    if (userInput === null) {
        alert(`As you wish`);
    } else {
        const trimmedInput = parseInt(userInput.trim(), 10).toString();
        switch (true) {
            case (
                trimmedInput > 10 &&
                trimmedInput !== '1' &&
                trimmedInput !== null &&
                !isNaN(trimmedInput) &&
                trimmedInput !== '0' &&
                trimmedInput !== '' &&
                Number.isInteger(+trimmedInput)
            ):
                let i = 2;
                let isPrime = true;
    
                while (i <= Math.sqrt(+trimmedInput)) {
                    if (+trimmedInput % i === 0) {
                        alert(`Not a prime number`);
                        isPrime = false;
                        return;
                    }
                    i++;
                }
    
                if (isPrime) {
                    alert(`${trimmedInput} is a prime number`);
                }
                break;
    
            case (
                trimmedInput === '2' ||
                trimmedInput === '3' ||
                trimmedInput === '5' ||
                trimmedInput === '7'
            ):
                alert(`${trimmedInput} is a prime number`);
                break;
    
            case (trimmedInput === '1' || trimmedInput < 0):
                alert(`Not a prime number`);
                break;
    
            default:
                alert(`Invalid number`);
                checkPrimeNum();
                break;
        }
    }

    

    
}

checkPrimeNum();


//Юзер вводить число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь. 
//Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.


function checkNum() {
const userNumber =   prompt(`Enter hole number positive number`);
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
    alert(`Invalid number or number CANT be 3^*`);
    checkNum();
}
}
checkNum();