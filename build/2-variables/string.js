"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// Comillas dobles
var pelicula = "Misión Imposible";
// Comillas simples
var serie = 'Hannibal';
// Comillas invertidas (template strings)
var poema = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna \naliqua. Feugiat in ante metus dictum at tempor commodo. \nTincidunt praesent semper feugiat nibh sed pulvinar. \nLaoreet sit amet cursus sit. Volutpat blandit aliquam etiam \nerat velit scelerisque in dictum. \nIn massa tempor nec feugiat nisl pretium fusce id. \nNulla facilisi cras fermentum odio eu feugiat pretium. \nPellentesque nec nam aliquam sem et tortor consequat. \nEuismod quis viverra nibh cras. \nFeugiat scelerisque varius morbi enim. \nPharetra diam sit amet nisl suscipit adipiscing bibendum est.\n";
// Operaciones
// Concatenar
var programas = "Mis programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);
// Template Strings
var programas2 = "\n    Mis programas favoritos son: " + pelicula + " y " + serie + "\n";
console.log(programas2);
// Template Strings (expresiones)
var edad_actual = 23;
var edad_futura = "\n    El siguiente mes mi edad ser\u00E1 " + (edad_actual + 1) + "\n";
console.log(edad_futura);
// Template Strings (postprocesado)
function myTag(strings, expProgramas, expEdad) {
    var str0 = strings[0]; // "Hola. "
    var str1 = strings[1]; // ". Soy un "
    // Hay técnicamente un String después
    // la expresión final (en nuestro ejemplo)
    // pero es vacía (""), asi que se ignora.
    // var str2 = strings[2];
    var strEdad = (expEdad > 99) ? 'viejo' : 'joven';
    // Podemos incluso retornar un string usando una plantilla de cadena de texto
    return "" + str0 + expProgramas + str1 + strEdad;
}
var postprocesado = myTag(__makeTemplateObject(["Hola. ", ". Soy un ", ""], ["Hola. ", ". Soy un ", ""]), programas, edad_actual);
console.log(postprocesado);
// métodos
console.log(programas.charAt(0)); // Primera Letra
console.log(programas.toUpperCase()); // En Mayúsculas
//# sourceMappingURL=string.js.map