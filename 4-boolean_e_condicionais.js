//Truthy e Falsy

//Existem valores que retornam truee outros que retornam
// false quando verificados em uma expressão boleana


//Falsy
//toda expressão que tenha um dos valores abaixo resultará em false
if (false){}
if (0){}//ou -0
if (NaN){}
if (null){}
if (null){}
if (''){}// ou "" ``


//Truthy
//toda expressão que tenha um dos valores abaixo resultará em true

if(1){}//true
if(" "){}//true
if("Francisco"){}//true
if(true){}//true
if(-5){}//true
if({}){}//true


//Operadores Logicos &&
//Retorna o ultimo valor true que encontrar ou o primeiro false que encontrar
true && true // true
true && false// false
5 && '5'//true
"Gato" && "Cão"//retorna "Cão" por ser a ultima string encontrada
(5 - 5) && (5 + 5)//0 vai retornar 0 porque 0 é um valor false, e basta que o 
//AND encontre um valor false pra negar toda expressão
"Gato" && false //false
(5 >= 5) && (3 < 6)//true


//Operadores Logicos ||
//Sempre retorna o primeiro valor true que encontrar

true || true// true
true || false// true
false || true//true
'Gato' || 'Cão'// 'Gato'
(5 - 5) || (5 + 5)// 10
'Gato' || false// 'Gato'
(5 >= 5) || (3 < 6)//true

