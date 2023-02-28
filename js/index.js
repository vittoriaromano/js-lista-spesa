'use strict'

//lista spesa

const shoppingList = [
    'vino',
    'latte',
    'cereali',
    'caffe' 
];


const ul = document.getElementById('shopping-list');
console.log(ul);

//diamo al'index una variabile precedente al ciclo
let i = 0; 


while(i < shoppingList.length){
    console.log(shoppingList[i]);
    const listItem = document.createElement('li');
    listItem.append(shoppingList[i]);
    ul.append(listItem);
    i++;
}