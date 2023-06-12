'use strict';

let allProd=[];

function prodectsHomePage(name ,img ,price){
    this.prodName=name,
    this.prodImg=img;
    this.prodPrice=price
    allProd.push(this);
}

prodectsHomePage.prototype.renderEmp  =   function(){
    let divs=document.getElementsByClassName("box");
    let imgpro=document.createElement("img");
    imgpro.src=this.prodImg;
    imgpro.alt=this.prodName;
    divs.appendchild(imgpro);
}


let productHp1 =new prodectsHomePage("Microsoft Xbox Series S","./assets/source/xbox.jpg","500$");
let productHp2 =new prodectsHomePage("SAMSUNG 16 Galaxy Book3","./assets/source/gsmarena_001.jpg","700$")
let productHp3 =new prodectsHomePage("Canon EF 16-35mm Lens","./assets/source/camera2.jpg","350$")
let productHp4 =new prodectsHomePage("Headsets with microphone","./assets/source/heads1.jpg","100$")

