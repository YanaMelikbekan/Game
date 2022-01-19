function one() {
    return function two(number) {
        console.log(number)
        const userNum = +prompt('Введите число');
        if (isNaN(userNum)) {
            alert('Можно вводить только число');
            two(number)
        } else if (userNum == false) {
            return
        }
        
        if (userNum != number) {
            if (userNum > number) {
                alert('Загаданное число меньше')
                two(number)
            }
            if (userNum < number) {
                alert('Загаданное число больше')
                two(number)
            }
        } else {
            alert('Поздравляю, Вы угадали')
        }
        if (userNum == null) {
            alert('Введите число')
            return
        }
    }
    two();
}
const number = one();
number(Math.floor(Math.random() * 101));

