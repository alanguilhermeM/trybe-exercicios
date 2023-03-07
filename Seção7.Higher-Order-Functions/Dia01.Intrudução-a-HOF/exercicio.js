//Exercicio 1

// const dados = (nomeCompleto) => {
//     const email = nomeCompleto.toLowerCase().replace(' ','_');
//     return { nomeCompleto, email: `${email}@trybe.com` };
// }

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// console.log(newEmployees(dados));

//Exercicio 2

// const verificando = (myNumber, number) => myNumber === number;

// const sorteio = (myNumber, função) => {
//     const sort = Math.floor((Math.random() * 5) + 1);

//     return função(myNumber, sort) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(sorteio(2, verificando));

//Exercicio 3
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'D', 'A', 'D', 'B'];
// const compara = (rightAnswers, studentAnswers) => {
//     if(studentAnswers === rightAnswers) {
//         return 1;
//     } if(studentAnswers === 'N.A') {
//         return 0;
//     }
//     return -0.5;
// };

// const teste = (rightAnswers, studentAnswers, callback) => {
//     let somatoria = 0;
//     for(let i = 0; i<rightAnswers.length; i += 1) {
//         const callbackReturn = callback(rightAnswers[i], studentAnswers[i]);
//         somatoria += callbackReturn;
//     }
//     return `Resultado final: ${somatoria} pontos`;
// }

// console.log(teste(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));

