console.log('labas')

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

let shoppingCartLocalStorage = localStorage.getItem('cart')
console.log(shoppingCartLocalStorage)

