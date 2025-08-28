btnAnswer1.addEventListener('click', () => {
    answer1.textContent = task1();
})

btnCode1.addEventListener('click', () => {
    code1.innerHTML = `const num1 = 0.1; <br>
    const num2 = 0.2; <br>
    return((num1 + num2).toFixed(1));`
})

btnAnswer2.addEventListener('click', () => {
    answer2.textContent = task2();
})

btnCode2.addEventListener('click', () => {
    code2.innerHTML = `let num1 = '1'; <br>
    let num2 = 2; <br>
    return +num1 + num2;`
})

btnAnswer3.addEventListener('click', () => {
    answer3.textContent = task3();
})

btnCode3.addEventListener('click', () => {
    code3.innerHTML = `
    if (+input3.value < 0) return 0; <br>
    const mb = +input3.value * 1024; <br>
    return (mb / 820).toFixed()`
})

btnAnswer4.addEventListener('click', () => {
    answer4.textContent = task4();
})

btnCode4.addEventListener('click', () => {
    code4.innerHTML = `
    const money = +input4.value; <br>
    const price = +input4_1.value; <br>
<br>
    if (money <= 0 || price <= 0) { <br>
        return 'Введіть коректні дані!'; <br>
    } <br>
<br>
    const chocolates = Math.floor(money / price); <br>
    const change = (money - chocolates * price).toFixed(2); <br>
    return \`Ви можете купити \${chocolates} шт, залишиться \${change} грн.\`;`
})

btnAnswer5.addEventListener('click', () => {
    answer5.textContent = task5();
})

btnCode5.addEventListener('click', () => {
    code5.innerHTML = `
    const num = +input5.value; <br>
<br>
    if (num < 100 || num > 999) {<br>
        return "Будь ласка, введіть тризначне число!";<br>
    }<br>
<br>
    const last = num % 10;<br>
    const middle = Math.floor((num % 100) / 10);<br>
    const first = Math.floor(num / 100);<br>
<br>
    return \`\${last}\${middle}\${first}\`;`
})

btnAnswer6.addEventListener('click', () => {
    answer6.textContent = task6();
})

btnCode6.addEventListener('click', () => {
    code6.innerHTML = `
    const deposit = +input6.value;<br>
<br>
    if (deposit <= 0) {<br>
        return "Сума має бути більшою за 0!";<br>
    }<br>
<br>
    const rate = 5;<br>
    const months = 2;<br>
<br>
    const interest = deposit * (rate / 100) * (months / 12);<br>
<br>
    return \`Нараховані відсотки: \${interest.toFixed(2)} грн\``
})

btnAnswer7.addEventListener('click', () => {
    answer7.textContent = task7();
})

btnCode7.addEventListener('click', () => {
    code7.innerHTML = `
    const exp1 = 2 && 0 && 3;<br>
    const exp2 = 2 || 0 || 3;<br>
    const exp3 = 2 && 0 || 3;<br>
<br>
    return \`Вираз 1 = \${exp1}, Вираз 2 = \${exp2}, Вираз 3 = \${exp3}\`;`
})