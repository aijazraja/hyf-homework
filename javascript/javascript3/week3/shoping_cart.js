console.log('Shoping cart');

                /* Part 1 */

     class Product {
     constructor(name, price) {
      this.name = name;
      this.price = price;
     }

     async convertToCurrency(curr) {
        const currency=curr.toUpperCase();
        let price = 0;
        const rice = await fetch("https://api.exchangeratesapi.io/latest?base=DKK")
          .then((promise) => promise.json())
          .then((data) => {
            for (let item in data.rates) {
              if (item == currency) {
                const currentrate = data.rates[item];
                price = this.price * currentrate.toFixed(2);
              }
            }
          });
        return 'Price of '+this.price+' DKK is : '+ price+' '+currency;
      }
    }
  
  
     class ShoppingCart {
     constructor() {
      this.products = [];
      //console.log(this.products)
    }
  
    addProduct(product) {
       // Implement functionality here
        this.products.push(product);
        console.log('added product');
        console.log(product.name);
      
    }
  
    removeProduct(product) {
        // Implement functionality here
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].name==product.name){
            this.products.splice(i, 1);
            console.log('\n\n'+product.name +' is removed  ')
        }
        }
    }
  
    searchProduct(productName) {
      // Implement functionality here
      this.products.forEach(oneProduct=>{
        if(oneProduct.name==productName){
        console.log('\n\n Searched product');
        console.log (oneProduct);
    }
     })

    }
  
    getTotal() {
        const divTag=document.getElementById('price');
        let price=0;
      // Implement functionality here
      this.products.forEach(oneProduct=>{
         price+= oneProduct.price;
      })
      divTag.innerHTML='Total price :'+price;
      console.log('\n\nTotal price :'+price)
    }
  
    renderProducts() {
         const ulElement=document.createElement('ul');
         const divTag=document.getElementById('products');
         this.products.forEach(oneProduct=>{
          const liElement=document.createElement('li');
          liElement.innerHTML='Product name :'+oneProduct.name+'<br>Product Price :'+oneProduct.price+'<br><br>';
          ulElement.appendChild(liElement);
     })
          divTag.appendChild(ulElement);

    }
  
    getUser() {
      // Implement functionality here
       return new Promise((resolve) => {
       fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(promise=>promise.json())
      .then((data)=>{
          resolve(data);
           
        })
      })
     }
    }
  
                /* Part 2 */

    const shoppingCart = new ShoppingCart();
    const flatscreen1 = new Product("flat-screen1", 5001);
    const flatscreen2 = new Product("flat-screen2", 5002);
    const flatscreen3 = new Product("flat-screen3", 5003);
    const flatscreen4 = new Product("flat-screen4", 5004);
    
    shoppingCart.addProduct(flatscreen1);
    shoppingCart.addProduct(flatscreen2);
    shoppingCart.addProduct(flatscreen3);
    shoppingCart.addProduct(flatscreen4);

    shoppingCart.removeProduct(flatscreen3);
    shoppingCart.getTotal();
    shoppingCart.searchProduct('flat-screen4');
    shoppingCart.renderProducts();
    let Name='';
    
    
    
    shoppingCart.getUser().then((data) => {
        let h1Tage= document.getElementById('name')
    Name=data.name;
    console.log('getuser() API');
    h1Tage.innerHTML='User name : '+Name;
    console.log(Name);
    });

                    /* Part 3 */
    const plant = new Product("plant", 50);
    plant.convertToCurrency("eur")  //working with all major currencies like Usd,GBP.aud,cad,SEK,NZD,nok etc
    .then((price) => console.log(price));

      