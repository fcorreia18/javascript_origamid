//Adicione a class ativo a todos os itens do menu

const menus = document.querySelectorAll('.menu li');

menus.forEach(li=>li.classList.add('ativo'));

//remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menus.forEach((li, index)=>{
    if (index != 0) {
        li.classList.remove('ativo')
    }
});
console.log(menus);



//Verificar se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    if (img.hasAttribute('alt')) {
        console.log("tem o atributo");
        return;
    }
    return console.log("não tem");
})

//Modifique o href do link externo no menu
const li = document.querySelectorAll('.menu li a');
li[3].setAttribute('href','www.meu-site.com');
console.log(li[3].getAttribute('href'));

// // Outra maneira de fazer o último exercício (Maneira do professor)
// const link = document.querySelector('a[href^=http]');
// link.setAttribute('href','www.google.com')
// console.log(link)