// Comillas dobles
let pelicula : string = "Misión Imposible";
// Comillas simples
let serie : string = 'Hannibal';
// Comillas invertidas (template strings)
let poema : string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Feugiat in ante metus dictum at tempor commodo. 
Tincidunt praesent semper feugiat nibh sed pulvinar. 
Laoreet sit amet cursus sit. Volutpat blandit aliquam etiam 
erat velit scelerisque in dictum. 
In massa tempor nec feugiat nisl pretium fusce id. 
Nulla facilisi cras fermentum odio eu feugiat pretium. 
Pellentesque nec nam aliquam sem et tortor consequat. 
Euismod quis viverra nibh cras. 
Feugiat scelerisque varius morbi enim. 
Pharetra diam sit amet nisl suscipit adipiscing bibendum est.
`;

// Operaciones

// Concatenar
let programas : string = "Mis programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);

// Template Strings
let programas2 : string = `
    Mis programas favoritos son: ${pelicula} y ${serie}
`;
console.log(programas2);

// Template Strings (expresiones)
let edad_actual : number = 23;
let edad_futura : string = `
    El siguiente mes mi edad será ${edad_actual + 1}
`;
console.log(edad_futura);


// Template Strings (postprocesado)
function myTag(strings : TemplateStringsArray, expProgramas : string, expEdad : number) {
  let str0 : string = strings[0]; // "Hola. "
  let str1 : string = strings[1]; // ". Soy un "

  // Hay técnicamente un String después
  // la expresión final (en nuestro ejemplo)
  // pero es vacía (""), asi que se ignora.
  // var str2 = strings[2];

  let strEdad : string = (expEdad > 99) ? 'viejo' : 'joven';

  // Podemos incluso retornar un string usando una plantilla de cadena de texto
  return `${str0}${expProgramas}${str1}${strEdad}`;
}

let postprocesado : string = myTag`Hola. ${ programas }. Soy un ${ edad_actual }`;
console.log(postprocesado);



// métodos

console.log(programas.charAt(0)); // Primera Letra
console.log(programas.toUpperCase()); // En Mayúsculas
