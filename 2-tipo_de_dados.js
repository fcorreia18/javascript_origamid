//Existem 7 tipos de dados primitivos em javascript

//Todos são primitivos excepto os objectos

let nome = "Francisco" //string
let idade = 22 //number
let temCarro = true //boolean
let simbolo = Symbol() //symbol
let dataDeViagem; //undefined
let vaiViajar = null //null
let abilidades = {} //object

//Verificando o tipo de dado usando o typeof

console.log(typeof vaiViajar, typeof nome, typeof dataDeViagem);


//concatenado expressões

let numero = 22;
let mes = "4"
console.log(numero + +mes)


let texto = "Fui ao trabalho no decorrer do feriado";

console.log(`Ontem ${texto}`)











//EXERCÍCIOS

/*

1 declare uma variável contendo uma  string
2 declare uma variável contendo um número dentro de uma string
3 declare uma variável com a sua idade
4 declare duas variáveis uma com o seu nome e outra com o seu sobrenome e some as duas
5 coloque a seguinte frase em uma variável: It's time;
6 verifique o tipo de variável que contêm o seu nome;
*/

const teclado ="teclado numerico";
let variavel_com_numero = "2"
let minha_idade = 22;
let primeiro_nome = "Francisco";
let ultimo_nome = "Correia";
console.log( primeiro_nome + ultimo_nome);
let frase = "It's time"
console.log(`${frase} de colocar uma expressão aqui`)