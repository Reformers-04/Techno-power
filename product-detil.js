


const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});


let productImg = document.getElementById("productImg");
let btnproduct = document.getElementsByClassName("btnproduct");
btnproduct[0].onclick=function(){
productImg.src="assets/product-detil/product1/1.png";


for(b of btnproduct){
b.classList.remove("active");

}
this.classList.add("active");
}


btnproduct[1].onclick=function(){
productImg.src="assets/product-detil/product1/2.png";


for(b of btnproduct){
b.classList.remove("active");

}


this.classList.add("active");
}
btnproduct[2].onclick=function(){
productImg.src="assets/product-detil/product1/3.png";
for(b of btnproduct){
b.classList.remove("active");

}
this.classList.add("active");
}







