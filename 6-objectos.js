let pessoa = {
    nome: "Francisco",
    idade:26,
}


let quadrado = {
    lados:4,
    area: (lado)=>{
        return lado * lado;
    },
    perimetro:()=>{
        return quadrado.lados * 4;
    }
}

console.log(quadrado.perimetro())