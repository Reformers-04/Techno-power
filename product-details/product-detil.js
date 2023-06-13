


const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});





let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cart');
let closeCart=document.querySelector('#close-cart');


cartIcon.onclick = () =>{
    cart.classList.add("active");
}


cartIcon.onclick = () =>{
    cart.classList.remove("active");
}

if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}
function ready(){
    let reomveCartButtons =document.getElementsByClassName('cart-remove')
    for(let i =0;i< reomveCartButtons.length;i++){

        let button =reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}
let addCart =document.getElementsByClassName('add-cart')

for(let i =0;i< addCart.length;i++){
    let button =addCart[i]
    button.addEventListener("click", addCartClicked);

}



function removeCartItem(event){
    let buttonClicked =event.target;
    buttonClicked.parentElement.remove();
    updatetotal();

}

function addCartClicked(event){
    let button=event.target
    let shopProducts =button.parentElement
    let title =shopProducts.getElementsByClassName('total-title')[0].innerText;
    let price =shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg =shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title,price,productImg){
    let cartShopBox =document.createElement('div')
    cartShopBox.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('cart-content')[0]
    let cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for(let i =0;i<cartItemsNames.length;i++){
        return;
    }
    
}

let cartBoxContent =`
<img src="${productImg}" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>

</div>
<i class='bx bxs-trash-alt cart-remove'></i>
`;
cartShopBox.innerHTML =cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCareItem)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCareItem)
function updatetotal(){
    let cartContent=document.getElementsByClassName('cart-content')[0]
    let cartBoxes=cartContent.getElementsByClassName('cart-box');
    let total=0;
    for(let i =0;i< cartBoxes.length;i++){
        let cartBox =cartBoxes[i]
        let priceElement =cartBox.getElementsByClassName('cart-price')[0]
        let price=parseFloat(priceElement.innerText.replace("$",""))
        total=total +price;
        // total=Math.round(total*100)/100;

        document.getElementsByClassName('total-price')[0].innerText="$" +total;
    }
}