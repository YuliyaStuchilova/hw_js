"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const product = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

product.forEach((element) => {
    element.price = element.price - element.price * 0.15;
});
console.log(product);

// for (let i = 0; i < products.length; i++) {
//     products[i].price = products[i].price - products[i].price * 0.15;
// }
// console.log(products);
