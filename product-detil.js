


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
btn[0].onclick=function(){
productImg.src="assets/product-detil/product1/1.png";


for(b of btn){
b.classList.remove("active");

}
this.classList.add("active");
}


btn[1].onclick=function(){
productImg.src="assets/product-detil/product1/2.png";


for(b of btn){
b.classList.remove("active");

}


this.classList.add("active");
}
btn[2].onclick=function(){
productImg.src="assets/product-detil/product1/3.png";
for(b of btn){
b.classList.remove("active");

}
this.classList.add("active");
}



//  // Select all elements with the "i" tag and store them in a NodeList called "stars"
//  const stars = document.querySelectorAll(".stars i");

//  // Loop through the "stars" NodeList
//  stars.forEach((star, index1) => {
//    // Add an event listener that runs a function when the "click" event is triggered
//    star.addEventListener("click", () => {
//      // Loop through the "stars" NodeList Again
//      stars.forEach((star, index2) => {
//        // Add the "active" class to the clicked star and any stars with a lower index
//        // and remove the "active" class from any stars with a higher index
//        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
//      });
//    });
//  });




const button = document.querySelector(".addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener('click',()=>{
  if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
  }
  else{
    done.style.transform = "translate(0px)";
    added = true;
  }
    
});






// const similarProducts=[];
// function Product (imageURL,customerName,Price,addToCart){
//     this.imageURL=imageURL;
//     this.customerName=customerName;
//     this.Price=Price;
//     this.addToCart=addToCart;

// }