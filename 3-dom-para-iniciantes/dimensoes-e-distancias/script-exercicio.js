const animais = document.querySelector('.animais-lista');
console.log(animais.offsetTop);//A distância entre o topo do elemento e o topo da página
console.log(animais.offsetLeft);//A distância entre o canto esquerdo do elemento e o canto esquerdo da página

const rect = document.querySelector('h2');
console.log(rect.getBoundingClientRect())