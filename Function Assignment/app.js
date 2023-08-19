function juiceWala(fruitType) {
    console.log("pehle " + fruitType + " ko chilo");
    console.log("phr " + fruitType + " ky pieces karo");
    console.log("phr " + fruitType + " ko juicer machine mai dalo");
    console.log("phr juicer machine ko on karo");
    console.log("ab jab " + fruitType + " achi trah mix hojaye tou milk daldo");
    console.log("ab milk aur " + fruitType + " ko sahi sae mix kar ky machine off kardo");
    console.log("ab " + fruitType + " juice ko glass mae nikal kar customer ko serve kardo");
}

juiceWala("Mango");
console.log("====================================");
console.log("====================================");

let fruitName = prompt("Ap konsy fruit ko juice pina chaoogy?");
juiceWala(fruitName);
console.log("====================================");
console.log("====================================");

//Question2 with 2 parameters

function juiceMaker(fruit1,fruit2) {
    console.log("pehle " + fruit1 + " aur " + fruit2 + " ko chilo");
    console.log("phr " + fruit1 + " aur " + fruit2 + " ky pieces karo");
    console.log("phr " + fruit1 + " aur " + fruit2 + " ko juicer machine mai dalo");
    console.log("phr juicer machine ko on karo");
    console.log("ab jab " + fruit1 + " aur " + fruit2 + " achi trah mix hojaye tou milk daldo");
    console.log("ab milk aur " + fruit1 + " aur " + fruit2 + " ko sahi sae mix kar ky machine off kardo");
    console.log("ab " + fruit1 + " + " + fruit2 + " juice ko glass mae nikal kar customer ko serve kardo");
}

juiceMaker("Banana","chikoo");
console.log("====================================");
console.log("====================================");