
function task1() {
    const num1 = 0.1;
    const num2 = 0.2;
    return((num1 + num2).toFixed(1));
}

function task2() {
    let num1 = '1';
    let num2 = 2;
    return +num1 + num2;
}

function task3() {
    if (+input3.value < 0) return 0;
    const mb = +input3.value * 1024;
    return (mb / 820).toFixed()
}

function task4() {
    const money = +input4.value;
    const price = +input4_1.value;

    if (money <= 0 || price <= 0) {
        return 'Введіть коректні дані!';
    }

    const chocolates = Math.floor(money / price);
    const change = (money - chocolates * price).toFixed(2);
    return `Ви можете купити ${chocolates} шт, залишиться ${change} грн.`;
}


function task5() {
    const num = +input5.value;

    if (num < 100 || num > 999) {
        return "Будь ласка, введіть тризначне число!";
    }

    const last = num % 10;
    const middle = Math.floor((num % 100) / 10);
    const first = Math.floor(num / 100);

    return `${last}${middle}${first}`;
}

function task6() {
    const deposit = +input6.value;

    if (deposit <= 0) {
        return "Сума має бути більшою за 0!";
    }

    const rate = 5;
    const months = 2;

    const interest = deposit * (rate / 100) * (months / 12);

    return `Нараховані відсотки: ${interest.toFixed(2)} грн`
}

function task7() {
    const exp1 = 2 && 0 && 3;
    const exp2 = 2 || 0 || 3;
    const exp3 = 2 && 0 || 3;

    return `Вираз 1 = ${exp1}, Вираз 2 = ${exp2}, Вираз 3 = ${exp3}`;
}