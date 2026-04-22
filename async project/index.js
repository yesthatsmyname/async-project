const style = document.createElement("style");
style.textContent = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f4f6f8;
    }

    header {
        background: #4a90e2;
        color: white;
        padding: 15px;
        text-align: center;
        font-size: 24px;
    }

    #posts {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 15px;
        padding: 15px;
    }

    .post {
        background: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        transition: transform 0.2s ease;
    }

    .post:hover {
        transform: scale(1.02);
    }

    .author {
        margin-top: 10px;
        font-size: 14px;
        color: #888;
    }
`;
document.head.appendChild(style);

const header = document.createElement("header");
header.textContent = "Posts";
document.body.appendChild(header);

const postsContainer = document.createElement("div");
postsContainer.id = "posts";
document.body.appendChild(postsContainer);


async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

function getUserByID(users, id) {
    return users.find(user => user.id == id);
}

window.onload = async () => {
    const posts = await getPosts();
    const users = await getUsers();

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const user = getUserByID(users, post.userId);

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <div class="author">Author: ${user.name}</div>
        `;

        postsContainer.appendChild(postElement);
    });
};

//1. išspausdinti kiekvieno post pavadinimą
//2, susikurti post elementą puslapyje (html)
//3. susikurti elementą kiekvienam postui duomenims (js) 




//make it look good and make it for phones too