//Truthy e Falsy

//Existem valores que retornam truee outros que retornam
// false quando verificados em uma expressão boleana


//Falsy
//toda expressão que tenha um dos valores abaixo resultará em false
if (false){}
if (0){}//ou -0
if (NaN){}
if (null){}
if (null){}
if (''){}// ou "" ``


//Truthy
//toda expressão que tenha um dos valores abaixo resultará em true

if(1){}//true
if(" "){}//true
if("Francisco"){}//true
if(true){}//true
if(-5){}//true
if({}){}//true


//Operadores Logicos &&
//Retorna o ultimo valor true que encontrar ou o primeiro false que encontrar
true && true // true
true && false// false
5 && '5'//true
let teste ='Gato' && 'Cão'; console.log(teste); //retorna "Cão" por ser a ultima string encontrada
(5 - 5) && (5 + 5)//0 vai retornar 0 porque 0 é um valor false, e basta que o 
//AND encontre um valor false pra negar toda expressão
"Gato" && false //false
let testando = (5 >= 5) && (3 < 6); console.log(testando);//true


//Operadores Logicos ||
//Sempre retorna o primeiro valor true que encontrar

true || true// true
true || false// true
false || true//true
'Gato' || 'Cão'// 'Gato'
(5 - 5) || (5 + 5)// 10
'Gato' || false// 'Gato'
(5 >= 5) || (3 < 6)//true



//TRABALHANDO COM SWITCH

let cor_favorita = "Azul";

switch (cor_favorita) {
    case "Azul":
        console.log("Olhe para o céu");
        break;
    case "Amarelo":
        console.log("Olhe para o sol")
        break;
    case "Verde":
        console.log("Olhe para a floresta")
        break;
    default:
        console.log("feche os olhos")
        break;
}




//EXERCÍCIOS
//Verifique se a sua idade é maior que a de algum parente
//dependendo do resultado colaca no console "É maior", "É Igual", "É menor"

let idade = 22;
let idade_pai = 50;
if (idade>idade_pai) {
    console.log("É maior");
} else if(idade < idade_pai){
    console.log(5 - ' ');
    
}else{
    console.log("É Igual");

}

//Qual é o valor retornado da seguinte expressão: 
let expressao = (5 - 2) && (5 - ' ') && (5 - 2);//3

//Verifique se as seguintes variáveis são truthy ou false:
let nome = "Francisco"//true;
let anos = 22;//true
let possui_doutorado = false;//false
let emprego_futuro;//false
let dinheiro_na_conta = 0;//false
console.log(!!nome,!!anos ,!!possui_doutorado ,!!emprego_futuro, !!dinheiro_na_conta);
//Compare o valor total de habitantes na china e em angola

let Angola = 25000
let china = 990000


//O que irá aparecer no console?

if (('Gato' === 'gato') && (5-2)) {
    console.log("verdadeiro");
} else {
    console.log("falso");
}

//O que irá aparecer no console?

if (('Gato' === 'gato') || (5-2)) {
    console.log("verdadeiro");
} else {
    console.log("falso");
}