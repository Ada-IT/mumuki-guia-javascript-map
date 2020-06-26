* El método map crea un nuevo array con el resultado de la función que le pasamos como parámetros
* Podemos utilizar este método para cambiar los valores que tenemos en un array
* En la función que pasamos como parámetro tenemos que retornar el elemento que queremos en el nuevo array

```js
const nombres = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper"];
const nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());

console.log(nombresMayuscula) // [ 'ADA LOVELACE', 'HEDY LAMARR', 'GRACE HOPPER' ] Todos en mayúscula
console.log(nombres) // [ 'Ada Lovelace', 'Hedy Lamarr', 'Grace Hopper' ] Este array quedó igual que antes
```

* En este ejemplo vemos como podemos utilizar map para crear un nuevo array modificando los valores de otro array
* El array original queda intacto

```js
const numeros = [1, 2, 3, 4];
const triples = numeros.map(numero => numero * 3);

console.log(triples) // [ 3, 6, 9, 12 ] todos los numeros multiplicados por 3
console.log(numeros) // [ 1, 2, 3, 4 ] este array quedó igual que antes
```