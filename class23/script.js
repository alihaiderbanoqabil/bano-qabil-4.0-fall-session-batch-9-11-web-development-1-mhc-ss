console.log("Class 11 of JS");


async function getAllPosts() {
    try {
        const response = await fetch("http://jsonplaceholder.typicode.com/posts");
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

// getAllPosts();

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
// getAllUsers();

// async function getAllData(url) {
//     try {
//         const response = await fetch(url);
//         console.log(response, "response");
//         const data = await response.json();
//         // isLoading = false;
//         console.log(data, "data");
//     } catch (error) {
//         // isLoading = false;
//         console.log("Error: ", error);
//     } finally {
//         isLoading = false;
//         console.log("Api call completed");
//     }
// }

// getAllData("https://jsonplaceholder.typicode.com/posts");
// getAllData("https://jsonplaceholder.typicode.com/users");
// getAllData("https://jsonplaceholder.typicode.com/comments");
// getAllData("https://jsonplaceholder.typicode.com/albums");
// getAllData("https://jsonplaceholder.typicode.com/todos");
// getAllData("https://jsonplaceholder.typicode.com/photos");


// const BASE_URL = "https://jsonplaceholder.typicode.com/";

// getAllData(BASE_URL + "posts");
// getAllData(BASE_URL + "users");
// getAllData(BASE_URL + "comments");
// getAllData(BASE_URL + "albums");
// getAllData(BASE_URL + "todos");
// getAllData(BASE_URL + "photos");

// async function getAllData(entity) {
//     try {
//         const BASE_URL = "https://jsonplaceholder.typicode.com/"
//         const response = await fetch(BASE_URL + entity);
//         console.log(response, "response");
//         const data = await response.json();
//         // isLoading = false;
//         console.log(data, "data");
//     } catch (error) {
//         // isLoading = false;
//         console.log("Error: ", error);
//     } finally {
//         isLoading = false;
//         console.log("Api call completed");
//     }
// }

// getAllData("posts");
// getAllData("users");
// getAllData("comments");
// getAllData("albums");
// getAllData("todos");
// getAllData("photos");

// getAllData("https://fakestoreapi.com/products")


async function createPost(post) {
    // const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30`
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST", // GET,POST,PUT,PATCH,DELETE
            // body object data can be different
            body: JSON.stringify(post),
            // body: JSON.stringify({
            //     title: 'foo',
            //     body: 'bar',
            //     userId: 1,
            // }),
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${TOKEN}`,
                // Accept: "application/json",
            }
        });
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

async function updatePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
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

async function deletePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
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

// createPost()