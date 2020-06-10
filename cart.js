fetch("http://localhost:3000/products")
        .then(response => {
        if(!response) {
        throw Error("error");
        }
        return response.json();
        })
        .then(data => {
        const mydata = data
        .map(prod => {
           
         return `
        <div class="al">
          <div class="container">
        
              <div class="acc">
                <p>${prod.Name}</p>
                <p>price: ${prod.Price}</p>
                
            </div>
        
            </div> 
        </div> `;
        
        })
        .join("");
        document.querySelector("#call").insertAdjacentHTML("afterbegin", mydata);
        })
          .catch(error => {
        console.log(error);
        });