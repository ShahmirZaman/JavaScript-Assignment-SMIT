let fruits = ["Mango","Banana","Orange","Apple","Pineapple"];
fruits[fruits.length] = 12;
// console.log(fruits);
let firstFruit = fruits[0];
fruits[fruits.length-1] = "Strawberry";
console.log(firstFruit);
console.log(fruits);