const isTruthy = (valor)=>{
    if(!!valor){
        console.log("é Truthy")
    }else{
        console.log("não é")
    }
}

isTruthy("lsal 9");

// let square = (...lados)=>{
//  let result =   lados.reduce((value, ac)=>{
//     return value + ac;
//  }, 0)
//     return result;
// }
//console.log(square(1, 9,1,1));~
let square = (lado)=>{

        return lado * 4;
    }
console.log(square(5))

let meuNome = (primeiro_nome, ultimo_nome)=>{
    return `${primeiro_nome} ${ultimo_nome}`;
}

meuNome("Francisco", "Correia");

let isEven = (numero) =>{
    if((numero % 2 )=== 0){
        return "par"
    }
    return "impar"
}

console.log(isEven(20));


let tipoDeDado = (dados)=>{
    return `o tipo de dados é ${typeof dados}`;
}

console.log(tipoDeDado(true));

addEventListener('scroll',()=>{
    return console.log(meuNome("Francisco", "Correia"));
})