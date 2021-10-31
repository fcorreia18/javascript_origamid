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


//nomeie 3 proriedades ou metodos de string

// endsWith
// concat
// includes
// indexOf


let div = document.querySelector('div');
//after
//append
//onload
//textContent
//style

div.addEventListener('copy', function(){
    return console.log("ola")
    });