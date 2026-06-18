fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((product) => {
      console.log(product.category);
        })
    
      
    });
    

