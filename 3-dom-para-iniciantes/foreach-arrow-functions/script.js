let imagens = document.querySelectorAll('ul.animais-lista li>img');
imagens.forEach(element => console.log(element));

let links = document.querySelectorAll("a[href^='#']");
console.log(links);

let animais = document.querySelector('.animais-descricao');
console.log(animais.querySelector('h2'));

let first_h2 = document.querySelectorAll('.animais-descricao h2')[0];
console.log(first_h2);

let last_p = document.querySelector('footer p');
console.log(last_p)


