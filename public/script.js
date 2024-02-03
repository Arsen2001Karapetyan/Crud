let usAge = document.getElementById('usAge');
let usName = document.getElementById('usName');

function getVal() {
     fetch("http://localhost:3000/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: usName.value,
            price: price.value,
            description: description.value,
            uuid: uuid.value,
            image: image.value
         })
    })
}
