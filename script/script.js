const cart = document.getElementById('cart')
const cartShow = document.getElementById('display-products')

const popCart = () => {
    cart.style.display = "block"
}

const hideCart = () => {
    cart.style.display = 'none'
}

let shoppingcart = [] //stored in [title, price, number]
let totalPrice = 0

const addToCart = (title, price) => {
    let found = false;
    for (let item of shoppingcart) {
        if (item[0] === title) {
            item[2]++;
            found = true;
            break; // Exit the loop early if item is found
        }
    }
    if (!found) {
        shoppingcart.push([title, price, 1]);
    }
    // totalPrice += price
    console.log(totalPrice);
    updateDisplay()
    console.log(shoppingcart); // Print the shopping cart array for testing
};

const minus = (index) => {
    if (shoppingcart[index][2] > 0) {
        shoppingcart[index][2] --
    }

    shoppingcart = shoppingcart.filter( i => i[2] != 0 )
    updateDisplay()

}

const plus = (index) => {
    shoppingcart[index][2] ++
    updateDisplay()
}

const updateDisplay = () => {
    let HTMLtoDisplay = ''
    totalPrice = 0
    for (let i of shoppingcart) {
        totalPrice += i[1] * i[2]
        HTMLtoDisplay += `
                        <div class="cart-element">
                            <div class="top">
                                <h3 class="title">
                                    ${i[0]} x ${i[2]}
                                </h3>
                                <div class="btns">
                                    <button onclick="plus(${shoppingcart.indexOf(i)})" style="cursor: pointer;">+</button>
                                    <button onclick="minus(${shoppingcart.indexOf(i)})" style="cursor: pointer;"">-</button>
                                </div>
                            </div>
                            <div class="bottom">
                                <h3 class="price">$${(i[1]*i[2]).toFixed(2)}</h3>
                            </div>
                        </div>
        `
    }

    cartShow.innerHTML = HTMLtoDisplay;
    document.getElementById("totalPrice").textContent = `Total to pay: $${totalPrice.toFixed(2)}`
     
}
