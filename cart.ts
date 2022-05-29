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

let shoppingCartLocalStorage: string | null = localStorage.getItem('cart')
// console.log(shoppingCartLocalStorage)

interface ProductInterface {
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        count: number,
        rate: number
    }
    quantity?: number
}


interface ShoppingCart {
    id: string,
    title: string,
    image: string,
    price: number,
    quantity?: number,
    totalQuantity?: number,
    addItem: any,
    removeItem: any
}


let localStorageItems: ProductInterface[] = []

let oneItem: ShoppingCart[] = []

let price: number = 0
let image: string = ''
let title: string = ''
let id: string = ''
let quantity: any = 0


if (shoppingCartLocalStorage) {
    localStorageItems = JSON.parse(shoppingCartLocalStorage)

    console.log(localStorageItems)

    localStorageItems.forEach((item) => {

        image = item.image
        title = item.title
        price = item.price
        id = item.id
        quantity = item.quantity

    })
}

console.log(price)
