
// Todos los números en TypeScript son flotantes
let mi_edad : number = 23;
let mi_nota : number = 16.55;
let mi_nota2 : number = 3.58;

//mi_edad = "cadena";     //ERROR typescript por ser lenguaje fuertemente tipado

console.log(mi_nota, "mi_nota");
console.log(mi_nota2, "mi_nota2");

// operadores aritméticos
console.log(mi_nota + mi_nota2, "Suma");
console.log(mi_nota - mi_nota2, "Resta");
console.log(mi_nota * mi_nota2, "Producto");
console.log(mi_nota / mi_nota2, "División");
console.log(mi_nota % mi_nota2, "Resto");
console.log(mi_nota ** mi_nota2, "Exponenciación");
// operadores Bit a Bit
console.log(mi_nota & mi_nota2, "AND bit a bit");
console.log(mi_nota | mi_nota2, "OR bit a bit");
console.log(mi_nota ^ mi_nota2, "XOR bit a bit");
console.log(mi_nota << mi_nota2, "Desplazamiento a la izquierda");
console.log(mi_nota >> mi_nota2, "Desplazamiento a la derecha con propagación de signo");
console.log(mi_nota >>> mi_nota2, "Desplazamiento a la derecha con relleno de ceros");
// operadores lógicos
console.log(mi_nota && mi_nota2, "AND Lógico");
console.log(mi_nota || mi_nota2, "OR Lógico");
