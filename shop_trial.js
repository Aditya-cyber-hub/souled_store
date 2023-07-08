
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click' ,() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

function addtocart(item){
    var selectedItem = document.createElement('div');
    
}


let cartIcon = document.querySelector("#cart_icon");
let cartContainer = document.querySelector(".cart-container");
let closeCart = document.querySelector("#close-cart");

// cartIcon.onclick = () => {
//     cartContainer.classList.add(".active");
// }
// closeCart.onclick = () => {
//     cartContainer.classList.remove("active");
// }


//working of cart
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    ready();
}

//making function
function ready(){
    var removeCartButton = document.getElementsByClassName('cart-remove');
    console.log(removeCartButton);
    for(var i = 0; i < removeCartButton.length; i++){
        var button = removeCartButton[i];
        button.addEventListener('click',removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }

    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);
    }

    document
        .getElementsByClassName('btn-buy')[0]
        .addEventListener('click',buyButtonClicked);
}


function buyButtonClicked(){
    alert('Your Order is Placed');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

//remove item from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
}

//quantity changes
function quantityChanged(event){
   var input = event.target ;
   if(isNaN(input.value) || input.value <=0){
    input.value = 1;
   }
   updateTotal();
}

// function clicked(){
//     console.log('done')
// }



//add to cart
function addCartClicked(event){
    var button = event.target;
    console.log(button);
    var shopProducts = button.parentElement.parentElement;
    console.log(shopProducts)

    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;

    console.log(title)
    console.log(price)
    // console.log(prod)

    
    addProductsToCart(title,price,productImg);
    updateTotal();
}


function addProductsToCart(title,price,productImg){

    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');

    console.log(cartShopBox)

    var cartItems = document.getElementsByClassName('cart-content')[0];
    const gg = document.getElementById('cart-content')
    console.log(gg)
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    console.log(cartItemNames)

    // for(var i = 0; i < cartItemsNames.length; i++){
    //     if(cartItemsNames[i].innerText == title){
    //         alert("You have already added this item to cart");
            
    //     }
    // }
    
    console.log(cartShopBox)
    var cartBoxContent = `
                        // <img class="cart-img" src="${productImg}" alt="" style="font-size: 10px;">
                        // <div class="detail-box">
                        //     <div class="cart-product-title">${title}</div>
                        //     <div class="cart-price">${price}</div>
                        //     <input type="number" value="1" class="cart-quantity">
                        // </div>
                        // <i class="fa-solid fa-trash-can cart-remove"></i>


                        <div class="section-p1 cart-container">

                        <table>
                        <tbody class="cart-content">
                        <tr class="cart-box">
                        <td class="Remove"><i class="fa-solid fa-trash-can cart-remove"></i></td>
                        <td ><img class="cart-img" src="${productImg}" alt="" style="font-size: 10px;"></td>
                        <td class="cart-product-title">${title}</td>
                        <td class="cart-price">${price}</td>
                        <td class="cart_value"><input class="cart-quantity" type="number" value="1"></td>
                        </tr>
                        </tbody>
                        </table>

                        </div>
                        `;
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click',removeCartItem);
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change',quantityChanged);

    

    
}


//update total
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₹" , ""));
        var quantity = quantityElement.value;
        total = total + (price*quantity);

    }


        document.getElementsByClassName('total-price')[0].innerText = "₹" + total;
        document.getElementsByClassName('total-price')[1].innerText = "₹" + total;

    
}