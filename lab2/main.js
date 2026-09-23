//задача 1 проверили
function chekNumber(num) {

    if (num > 0) {
        console.log('положительное')
    }


    if (num < 0) {
        console.log('отрицательное')
    }

    if (num = 0) {
        console.log('ноль')
    }
    if (num % 2 == 0) {
        console.log('четное')
    }
    else
        console.log('нечетное')
}


chekNumber(2)

console.log('TASK 2');

//задача 2 проверили
const numbers = [4, 8, 15, 16, 23, 42];
let sum = 0
let max = 0
const oioioi = []
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
    if (numbers[i] > 10) {
        oioioi.push(numbers[i])
    }
    if (numbers[i] > max) {
        max = numbers[i]
    }

}
//задача 3
const students = [
    {
        name: 'Vika',
        grade: [3, 5, 4, 3, 5]
    },
    {
        name: 'Dima',
        grade: [3, 5, 5, 4, 5]
    },
    {
        name: 'Petr',
        grade: [3, 4, 4, 4, 5]
    },
    {
        name: 'Lisa',
        grade: [3, 4, 2, 3, 2, 4]
    },
    {
        name: 'Artem',
        grade: [3, 4, 4, 3, 5, 2]
    },
];
const mingrade = 4
for (let i = 0; i < students.length; i++) {
    if (students[i].grade > mingrade) {
        console.log(students[i].name, "-", students[i].grade);
    }
}
let sim = 0;
for (let i = 0; i < students.length; i++) {
    let gradeSum = 0
    for(let j = 0; j < students[i].grade.length; j++) {
        gradeSum += students[i].grade[j]
    }
    let avgGrade = gradeSum / students[i].grade.length;
    sim += avgGrade;
}

const a = sim / students.length;
console.log("Средняя оценка:", a)

//задача 4
const random = Math.random(10);

function chekguess(guess) {
    if (guess == random) {
        return "Угадал";
    }
    if (guess < random) {
        return "загаданное число больше";
    }
    else {
        return "Загаданное число меньше";
    }
}
chekguess(3)