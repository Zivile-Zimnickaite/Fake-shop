"use strict";
//countCart f-ja turi perseiti per krepselio turini ir susaiciuoti visus quantity parametrus ir sudeti juos i kintamaji
// let quantityCounter = 0;
// let priceCounter = 0;
// // su map sakome - paimk kiekvieno elemento quantity ir pridek prie counterio
// shoppingCart.map(x => {
//     /// @ts-ignore
//     quantityCounter += x.quantity;
//     toolbarProductCounter.innerHTML = quantityCounter;
//     /// @ts-ignore
//     priceCounter += x.quantity * x.price;
//     /// @ts-ignore
//     toolbarPriceCounter.innerHTML = `Total Price: ${priceCounter.toFixed(2)} €`;
//     localStorage.setItem('cart', JSON.stringify(shoppingCart));
// });
let shoppingCartLocalStorage = localStorage.getItem('cart');
let localStorageItems = [];
let oneItem = [];
let price = 0;
let image = '';
let title = '';
let id = '';
let quantity = 0;
if (shoppingCartLocalStorage) {
    localStorageItems = JSON.parse(shoppingCartLocalStorage);
    console.log(localStorageItems);
    localStorageItems.forEach((item) => {
        image = item.image;
        title = item.title;
        price = item.price;
        id = item.id;
        quantity = item.quantity;
    });
}
console.log(price);
