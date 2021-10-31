const Truthy = (valor)=>{
    if(!!valor){
        console.log("é Truthy")
    }else{
        console.log("não é")
    }
}

Truthy("lsal 9");

let square = (...lados)=>{
 let result =   lados.reduce((value, ac)=>{
    return value + ac;
 }, 0)
    return result;
}
console.log(square(1, 9,1,1));