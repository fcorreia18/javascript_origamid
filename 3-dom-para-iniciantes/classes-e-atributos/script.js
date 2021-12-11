const menu = document.querySelector('.menu');
console.log(menu);

menu.classList.add('vermelho');
menu.classList.add('branco','preto');
console.log(menu.classList)//mostra a lista de classes do elemento
menu.classList.remove('branco', 'preto')
menu.classList.toggle('vermelho')
menu.classList.replace('azul', 'outraclasse')
menu.className += " nova classe";//maneira antiga de manipular classes
console.log(menu.classList)


//ATRIBUTOS

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('src'))//retorna o valor do atributo requerido
console.log(img.getAttributeNames())//retorna um array com os nomes dos atributos



