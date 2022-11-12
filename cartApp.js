let row3_products = document.getElementById("row3-products");


let basket = JSON.parse(localStorage.getItem("cartItems")) || [];

let row3_Shop = () => {
    return (row3_products.innerHTML = storeItems.map((x) => {
        let {id, name, price, img} = x
        return  `
        <div class="row3-items-container product" id = product-id-${id}>
            <div class="row3-item-information-container">
            <img class = "product-img" src=${img} alt="">
            <div class="add-to-cart-more">
                <div class="add-to-cart" onclick = "addToCart(${id})" id = "${id}">
                <i class="fa-solid fa-cart-plus add-item-to-cart"></i>
                </div>
                <div class="more">
                <i class = "fa-solid fa-info"></i>
                </div>
            </div>
            </div>
            <div class="name-price">
            <p class="item-name">${name}</p><span class="item-price">$${price}</span>
            </div>
        </div>
        `
    }).join(""));
}

row3_Shop();

let addToCart = (id) => {
    selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
            msg:"In cart"
        });
        let msgParent = document.getElementById(selectedItem.id);
        let msg = document.createElement('div');
        msgParent.append(msg);
        msg.innerHTML = '<h4 class = "in-cart">In cart</h4>';
        msgParent.style.pointerEvents = 'none';
    }     
    else if(ifExists) {
        let msgParent = document.getElementById(selectedItem.id);
        let msg = document.createElement('div');
        msgParent.append(msg);
        msg.innerHTML = '<h4 class = "in-cart">In cart</h4>';
        msgParent.style.pointerEvents = 'none';

    }

    updateCartQuantity()
    localStorage.setItem("cartItems", JSON.stringify(basket));
}


let updateCartQuantity = () => {
    let noOfItemsInCart = document.getElementById('cart-items-no');
    noOfItemsInCart.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0)
}
updateCartQuantity();


