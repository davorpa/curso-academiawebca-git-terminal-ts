"use strict";
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
//# sourceMappingURL=string.js.map