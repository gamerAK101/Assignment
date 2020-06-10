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
              <img src=${prod.Image}>
        
              <div class="acc">
                <p>${prod.Name}</p>
                <p>price: ${prod.Price}</p>
                <div>
              <button class="button post" id="post" onclick="post('${prod.Name}','${prod.Price}')">Kick to Cart</button>
              <button class="button delete" id="delete" onclick="remove('${prod.id}')">Remove from Cart</button>
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

        function post(Name, Price) {
          document.getElementById('post').style.visibility = 'hidden';
          document.getElementById('delete').style.visibility = 'visible';

          fetch("http://localhost:3000/carts", {

    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        Name: Name,
        Price: Number(Price),

    })
}).then(response => {
    if(!response) {
    throw Error("error");
    }
    return response.json();
}).then((data) => {
        console.log(data);
})
        }
        
        function remove(id)
        {
          document.getElementById('post').style.visibility = 'visible';
          document.getElementById('delete').style.visibility = 'hidden';

          fetch("http://localhost:3000/carts/"+id+ {

          method: 'DELETE',
          headers: {
              'content-type': 'application/json'
          },
      })
      .then(response => {
          if(!response) {
          throw Error("error");
          }
          return response.json();
      }).then((data) => {
              console.log(data);
      })

        }