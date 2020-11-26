  
console.log("Script loaded");

const products = getAvailableProducts();
//console.log(products.length);

function randerProducts(products){
    let ulList=document.getElementById("productList");

    for(let i=0;i<products.length;i++){
    const liElement=document.createElement("li");
    liElement.innerHTML='<h2>'+products[i].name +'</h2> Price:'+products[i].price+'<br> Rating:'+products[i].rating+'<br> <br>'
    ulList.appendChild(liElement);



      }
}
randerProducts(products);

//console.log(products);