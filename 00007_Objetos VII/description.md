- Copiar y pegar el código de la solución al ejercicio anterior
- Debido a un cambio de requerimiento, el precio final total se calcula distinto
- Si un producto no tiene free shipping (`freeShipping` es `false`) entonces al precio del producto hay que sumarle 120
- Si tiene free shipping (`freeShipping` es `true`) entonces se toma el precio que está en el objeto y no se le suma nada
- Una vez calculado el total, hay que agregar un 21% de IVA

```js
console.log(shoppingCart.getTotal()); // 1871.2529
```