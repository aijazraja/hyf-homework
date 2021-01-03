  
console.log("Script loaded");

const products = getAvailableProducts();

let ulList=document.getElementById("productList");
const priceInput=document.getElementById('productbyPrice');
function randerProducts(products){

  clearOldList();
   products.forEach((oneProduct)=>{
      const liElement=document.createElement("li");
      liElement.id='liElement';

      const h2Tag = document.createElement("h2");
      h2Tag.id='h2Tag';
      h2Tag.innerHTML=oneProduct.name;
      liElement.appendChild(h2Tag);
      
      let imageElement = document.createElement("img");
       imageElement.src = "icon6.png";
      liElement.appendChild(imageElement);

      let pTag=document.createElement('p');
      pTag.innerHTML='Price :'+oneProduct.price;
      liElement.appendChild(pTag);

      let pTag2=document.createElement('p');
      pTag2.innerHTML='Rating :'+oneProduct.rating;
      liElement.appendChild(pTag2);
      
      ulList.appendChild(liElement);
      
    });
  }



  /**************************Searching**************************************************/

              /******Search by product input*******/

   document.getElementById('product').addEventListener('keyup', search);

    function search(){

    const productToSearch=document.getElementById('product').value;
    const filteredProducts= products.filter((singleProduct)=>
    singleProduct.name.toLowerCase().includes(productToSearch.toLowerCase()));
     randerProducts(filteredProducts);
    }


                 /*********Search by Max Price*********/
randerProducts(products);
priceInput.addEventListener('keyup',searchbyPrice)

function searchbyPrice(){
  
 const maxPrice=parseInt(priceInput.value);
 const filteredPrice= products.filter((singleProduct)=>singleProduct.price<maxPrice);
 randerProducts(filteredPrice);
}

/*****************Clear list*************************/

function clearOldList(){
  while(ulList.children.length>0){
    ulList.removeChild(ulList.childNodes[0])
  }
}


/****************************Sorting**************************************************/

document.getElementById('select1').addEventListener('change', onchange);

function onchange(){
 
  const maxPriceFilter=products.filter((Product)=>
   Product.price).map((pricefiltered)=>pricefiltered.price);

  const sorted=maxPriceFilter.sort(function(a, b){return b - a});

  /////////////////Sorting by Min price//////////////////////////

  if(document.getElementById('minPrice').selected){
    let filteredPrice=[];
      for(let i=sorted.length-1;i>0;i--){
          for(let j=0;j<sorted.length;j++){
          if(sorted[i]==products[j].price){
            
            filteredPrice.push( products[j]);
      }
     }     
    }
     
    randerProducts(filteredPrice);  

  }          /////////////////Sorting by Max price//////////////////////////

   else if(document.getElementById('maxPrice').selected){
 
    let filteredPrice1=[];
  
      for(let i=0;i<sorted.length;i++){
          for(let j=0;j<sorted.length;j++){
                if(sorted[i]==products[j].price){
                filteredPrice1.push( products[j]);
                  }
            }

        }
        randerProducts(filteredPrice1);

  }       /////////////////Sorting by Max Rating//////////////////////////

  else if(document.getElementById('maxRating').selected){
  let maxRatingArray=[];
  const maxRatingFilter=products.filter((product)=>
   product.rating).map((ratingFiltered)=>ratingFiltered.rating);
   //console.log(maxRatingFilter);
   const sortedRating=maxRatingFilter.sort(function(a, b){return b - a});
   //console.log(sortedRating);
   for(let i=0;i<sortedRating.length;i++){
    
            for(let j=0;j<sortedRating.length;j++){
                if(sortedRating[i]==products[j].rating){
                  maxRatingArray.push( products[j]);
                }
             }
    }
      randerProducts(maxRatingArray);

  }

}


