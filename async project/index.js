//async function getPost () {
//    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//    response = await response.json();
//    console.log(response);
//    console.log(response.title);
//}

async function getPosts () {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    response = await response.json();
    return response;
}

window.onload = async () => {
    getPost();
    let posts = await getPosts();
    console.log(posts);

//1. išspausdinti kiekvieno post pavadinimą
//2, susikurti post elementą puslapyje (html)
//3. susikurti elementą kiekvienam postui duomenims (js) 

const postElement = document.getElementById("posts");

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
    <p>${post.title}</p>
    <p>${post.body}</p>
    `;
    postElement.append(postElement);
})
}