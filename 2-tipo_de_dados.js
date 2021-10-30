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