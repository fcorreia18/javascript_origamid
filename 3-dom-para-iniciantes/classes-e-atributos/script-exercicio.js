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

