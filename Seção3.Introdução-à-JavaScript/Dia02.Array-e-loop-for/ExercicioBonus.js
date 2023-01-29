// Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 1; i < numbers.length; i += 1) {
//     for (let i2 = 0; i2 < i; i2 += 1) {
//         if (numbers[i] < numbers[i2]) {
//             let position = numbers[i];
//             numbers[i] = numbers[i2];
//             numbers[i2] = position;
//         }
//     }
// }
// console.log(numbers);

// Ordene o array numbers2 em ordem decrescente e imprima seus valores;

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers2.length; index += 1) {
    for (let in2 = 0; in2 < index; in2 += 1) {
        if (numbers2[index] > numbers2[in2]) {
            let position2 = numbers2[index];
            numbers2[index] = numbers2[in2];
            numbers2[in2] = position2;
        }
    }
}

console.log(numbers2);


// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:


// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let multiplicado = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length && i > 0; i += 1) {
    for (let i2 = i - 1; i > i2 && i2 >= 0 || i2 === 9; i2 += 1) {
        if (i2 === 9) {
            multiplicado = numbers[i2] * 2;
        } else if (i2 !== 9) {
            multiplicado = numbers[i2] * numbers[i];
        };
    }
}
console.log(numbers);
