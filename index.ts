const container: any = document.querySelector('.container') as HTMLElement

const toolbarProductCounter: any = document.querySelector('.toolbar-product-counter')
const toolbarPriceCounter: any = document.querySelector('.toolbar-price-counter')



// ----3 ----- Susikuriam interface

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
//---6 --- gautus duomenis priskiriame kintamajam

let products: ProductInterface[] = []

// --- 5--- susikuriam Array, i kuri pridesime prekes

let shoppingCart: ProductInterface[] = []


// ----7----susikuriam funkcija krepselio prekiu skaiciavimui

function countCart() {
    //countCart f-ja turi perseiti per krepselio turini ir susaiciuoti visus quantity parametrus ir sudeti juos i kintamaji

    let quantityCounter = 0
    let priceCounter = 0

    // su map sakome - paimk kiekvieno elemento quantity ir pridek prie counterio
    shoppingCart.map(x => {
        /// @ts-ignore
        quantityCounter += x.quantity
        toolbarProductCounter.innerHTML = quantityCounter
        /// @ts-ignore
        priceCounter += x.quantity * x.price
        /// @ts-ignore
        toolbarPriceCounter.innerHTML = `Total Price: ${priceCounter.toFixed(2)} €`

        localStorage.setItem('cart', JSON.stringify(shoppingCart))
    })
}

// --- 4 --- susikuriam funkcija

function addToCart(e: any) {
    // console.log(e.target.id)
    const id = Number(e.target.id)
    /// @ts-ignore
    const current: any = products.find(x => x.id == id)
    /// @ts-ignore
    const inCart = shoppingCart.find(x => x.id === id)

    if (inCart) {
        //jeigu inCart yra prekė (=true)

        //jei preke yra tokiu indeksu ir norime prideti tokia pacia, tai pagal id ja surandame
        /// @ts-ignore
        const index = shoppingCart.findIndex(x => x.id === id)

        //updatinam prekiu kieki
        /// @ts-ignore
        shoppingCart[index].quantity++
    } else {

        // jeigu nėra nieko inCart, tuomet pridedame vienetą (preke)
        current.quantity = 1
        shoppingCart.push(current)
    }

    countCart()
}

// ----2 ----- susikuriam f-ja

function appendProducts(products: ProductInterface[]) {
    container.innerHTML = ""

    products.map(product => {
        container.innerHTML += ` <div class="product-card">
    <img class="product-image" src="${product.image}" alt="${product.title}"></img>
    <h1 class="procuct-title">${product.title}</h1>
    <p class="product-category">${product.category}</p>
    <p class="product-description">${product.description}</p>
    <p class="product-price">${product.price}</p>
    <button class="add-product" id="${product.id}">Add To Cart</button>
</div>`

    })

    const addProductButton = document.querySelectorAll('.add-product') as NodeListOf<HTMLElement>

    [...addProductButton].map(x => x.onclick = addToCart)

    //tinka ir forEach ir spread , abu atlieka ta pacia funkcija
    // adProductButton.forEach(x => {

    // })
}

// ----1 ----- issifetchinam produktus

(async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    products = await res.json()

    console.log(products)
    appendProducts(products)
})()




