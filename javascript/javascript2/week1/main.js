  
console.log("Script loaded");

const products = getAvailableProducts();
//console.log(products.length);

function randerProducts(products){
    let ulList=document.getElementById("productList");

    for(let i=0;i<products.length;i++){
    const liElement=document.createElement("li");
    const h2Tag = document.createElement("h2");
    h2Tag.innerHTML=products[i].name;
    ulList.appendChild(h2Tag);
    liElement.innerHTML= ' Price:'+products[i].price+'<br> Rating:'+products[i].rating+'<br> <br>'
    
    ulList.appendChild(liElement);
  }
}
randerProducts(products);

//console.log(products);