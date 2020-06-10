fetch("http://localhost:3000/carts/26", {

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