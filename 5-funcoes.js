const Truthy = (valor)=>{
    if(!!valor){
        console.log("é Truthy")
    }else{
        console.log("não é")
    }
}

Truthy("lsal 9");

let square = (...lados)=>{
    lados.map((i)=>{
        return i + i;
    });
}
console.log(square(1, 1,1,1));