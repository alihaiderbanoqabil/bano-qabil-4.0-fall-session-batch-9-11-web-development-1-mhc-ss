// console.log("Class 10 of JS");


console.log("Before Api Calling");
// fetch("https://jsonplaceholder.typicode.com/users")

function getAllProductsThenCatch() {
    let isLoading = true;
    fetch("https://fakestoreapi.com/products")
        .then((response) => {
            // isLoading = true;
            console.log(response, "response");
            return response.json();
        })
        .then(function (data) {
            // isLoading = false;
            console.log(data, "data");
        })
        .catch((error) => {
            // isLoading = false;
            console.log("Error: ", error);
        })
        .finally(() => {
            isLoading = false;
            console.log("Api call completed");
        })
}

getAllProductsThenCatch();

async function getAllProductsAsyncAwait() {
    let isLoading = true;
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response, "response");
        const data = await response.json();
        // isLoading = false;
        console.log(data, "data");
    } catch (error) {
        // isLoading = false;
        console.log("Error: ", error);
    } finally {
        isLoading = false;
        console.log("Api call completed");
    }
}

getAllProductsAsyncAwait();
// const getAllProductsAsyncAwaitArrow = async () => {
//   await  fetch("https://fakestoreapi.com/products")
// }

console.log("After Api Calling");
