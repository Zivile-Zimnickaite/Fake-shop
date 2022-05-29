"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.querySelector('.container');
const toolbarProductCounter = document.querySelector('.toolbar-product-counter');
const toolbarPriceCounter = document.querySelector('.toolbar-price-counter');
//---6 --- gautus duomenis priskiriame kintamajam
let products = [];
// --- 5--- susikuriam Array, i kuri pridesime prekes
let shoppingCart = [];
// ----7----susikuriam funkcija krepselio prekiu skaiciavimui
function countCart() {
    //countCart f-ja turi perseiti per krepselio turini ir susaiciuoti visus quantity parametrus ir sudeti juos i kintamaji
    let quantityCounter = 0;
    let priceCounter = 0;
    // su map sakome - paimk kiekvieno elemento quantity ir pridek prie counterio
    shoppingCart.map(x => {
        /// @ts-ignore
        quantityCounter += x.quantity;
        toolbarProductCounter.innerHTML = quantityCounter;
        /// @ts-ignore
        priceCounter += x.quantity * x.price;
        /// @ts-ignore
        toolbarPriceCounter.innerHTML = `Total Price: ${priceCounter.toFixed(2)} €`;
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
    });
}
// --- 4 --- susikuriam funkcija
function addToCart(e) {
    // console.log(e.target.id)
    const id = Number(e.target.id);
    /// @ts-ignore
    const current = products.find(x => x.id == id);
    /// @ts-ignore
    const inCart = shoppingCart.find(x => x.id === id);
    if (inCart) {
        //jeigu inCart yra prekė (=true)
        //jei preke yra tokiu indeksu ir norime prideti tokia pacia, tai pagal id ja surandame
        /// @ts-ignore
        const index = shoppingCart.findIndex(x => x.id === id);
        //updatinam prekiu kieki
        /// @ts-ignore
        shoppingCart[index].quantity++;
    }
    else {
        // jeigu nėra nieko inCart, tuomet pridedame vienetą (preke)
        current.quantity = 1;
        shoppingCart.push(current);
    }
    countCart();
}
// ----2 ----- susikuriam f-ja
function appendProducts(products) {
    container.innerHTML = "";
    products.map(product => {
        container.innerHTML += ` <div class="product-card">
    <img class="product-image" src="${product.image}" alt="${product.title}"></img>
    <h1 class="procuct-title">${product.title}</h1>
    <p class="product-category">${product.category}</p>
    <p class="product-description">${product.description}</p>
    <p class="product-price">${product.price}</p>
    <button class="add-product" id="${product.id}">Add To Cart</button>
</div>`;
    });
    const addProductButton = document.querySelectorAll('.add-product');
    [...addProductButton].map(x => x.onclick = addToCart);
    //tinka ir forEach ir spread , abu atlieka ta pacia funkcija
    // adProductButton.forEach(x => {
    // })
}
// ----1 ----- issifetchinam produktus
(() => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://fakestoreapi.com/products");
    products = yield res.json();
    console.log(products);
    appendProducts(products);
}))();
