
export function getProducts() {
    return fetch('http://localhost:3333/products')
        .then(data => data.json())
        .catch((error) => {
        console.log(error)
    })
}