

//Ejercicio 1 Todas las palabras que tengan longitud de 7 o más letras

let mensaje2 = "hermenejildo severiano carlos arturo  ricardo  soledad";
let newMensaje2 = mensaje2.replace(/[a-z]{7,}/g,""); 
console.log(newMensaje2);

//Ejercicio 2 Expresiones que no finalicen en una vocal

let mensaje3 = "hermenejildo severiano carlos arturo  ricardo  soledad ";
let newMensaje3 = mensaje3.replace(/[abcd]$/g,""); 
console.log(newMensaje3);


//Ejercico3 Las expresiones que comiencen con m donde la segunda letra no es vocal

let mensaje4 = "hermenejildo Mseveriano Mcarlos Marturo  ricardo  soledad";
let newMensaje4 = mensaje4.replace(/M(?=[^aeiou])\S+/g,""); 
console.log(newMensaje4);

//Ejercicio 4 Expresiones encerradas entre comillas

let mensaje5 = "hermenejildo 'severiano' carlos arturo  'ricardo' 'a'  soledad";
let newMensaje5 = mensaje5.replace(/'\w+'/g,""); 
console.log(newMensaje5);


//Ejercicio 5 Ip´s

let mensaje6 = "198.161.2.1 1111 2342 198.168.1.1  1903.2342.1233";
let newMensaje6 = mensaje6.replace(/\b\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}\b/g,"");
console.log(newMensaje6);


//Ejercicio 6 la hora

let mensaje7 = "En mi casa mi madre me pedi llegar a las 9:00pm sino me regaña";
let newMensaje7 = mensaje7.replace(/\d+:\d+[am|pm]+/g,"*");
console.log(newMensaje7);


//Ejercicio 7 Telefonos
let mensaje8 = "Mi numero es 985-111-50-36 y mi direccion 16x19";
let newMensaje8 = mensaje8.replace(/\d+[-]\d/g,"");
console.log(newMensaje8);


//Ejercicio 8 Correos electronicos 

let mensaje9 = "Mi nuevo correo es ismaelalbornoz@gmail.com recuerda borrar el anterior que es immaeldalbornoz2098@gmail.com";
let newMensaje9 = mensaje9.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+\.[a-zA-z]{2,6})/g,"");
console.log(newMensaje9);

//Ejercicio 9 URL

let mensaje10 = "La direccion de la pagina es https://www.google.com";
let newMensaje10 = mensaje10.replace(/https:..[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.[a-z]+/g,"");
console.log(newMensaje10);

//Ejercicio 10 Codigo postal

let mensaje11 = "El codigo postal de mexico es 97920 y el de mi ciudad 97345";
let newMensaje11 = mensaje11.replace(/\d{5,}/g,""); 
console.log(newMensaje11);
