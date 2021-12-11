//mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(item => console.log(item.innerText));//or textContent


//Como corrigir os erros abaixo?

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
})

let i = 0;
imgs.forEach(()=>{
    console.log(i++);
})

imgs.forEach(()=>i++)


