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
console.log(animais.attributes.id.value);

