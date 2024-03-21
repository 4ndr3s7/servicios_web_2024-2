const fullname = "Jaime Andres Ballesteros Rios"
console.log(fullname.length) /// ver la longitud de una cadena de texto

console.log(fullname[0] ) /// acceder a una posicion 

console.log(fullname.includes ('Jaime')) ///sirve para buscar en una cadena 

console.log(fullname.indexOf ('Andres')) /// busca la pocision en la que se encuentra la subacadena dentro de nuestra cadena de texto origen

console.log(fullname.startsWith ('Andres')) /// busca si este es el valor con el que comienza la string 

console.log(fullname.endsWith ('pepe')) ///  busca si este es el valor con el que termina la string 

console.log(fullname.slice (0, 5)) ///  busca entre los indices 0 1 2 3 4 en la string y hace un corte 

console.log(fullname.toUpperCase ()) /// vuelve una string a mayusculas

console.log(fullname.toLocaleLowerCase ()) /// convierte una string a minusculas 

console.log(fullname.replace ("Andres", "pepe" )) /// Remplaza en el string 

console.log(fullname.repeat (5)) /// Sirve para repetir una cadena o palabra x veces 

console.log("                Jaime Andres Ballesteros      Rios      ".trim() ) ///  elimina los espacios que tenga a cada lado

console.log(fullname.split (' ')) /// 