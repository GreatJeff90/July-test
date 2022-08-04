let layout = document.querySelector('.posts')
let url = 'https://jsonplaceholder.typicode.com/posts'
let posts = []

//get posts
function getPosts() {
    fetch (url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        posts = data
        renderUI(posts)
        // let html = ''
        // data.forEach(album => {
        //     html += `
        //     <li class="post">
        //         <h4>${album.title}</h4>
        //         <p>${album.id}</p>
        //         <p>${album.userId}</p>
        //     </li>
        //     `
        // });
        // layout.innerHTML = html
    })
}

getPosts();


let mainForm = document.querySelector("#post-form");
let postTitle = document.querySelector("#title");
let postBody = document.querySelector("#body");
let post = [];

mainForm.addEventListener('submit', createPost);

function createPost(e) {
    e.preventDefault()
    console.log(postTitle)
    console.log(postTitle.value, postBody.value);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'title': postTitle.value, 
            'body': postBody.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        posts.unshift(data);
        console.log(posts);
        renderUI(posts);
    })

}

//Create the delete function
function deletePost(id) {
    console.log(id)
    let complete = url + '/' + id
    fetch (complete, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        posts = posts.filter(posts => posts !== id);
        console.log(posts);
        renderUI(posts)
    })
}

//Create a function to open a single post
function openSingle(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem('viewedPost', id)
            window.location.href = 'single.html'
            // console.log(data)
        });
}

//Create a function to update the post
function updatePost(id) {
    console.log(id)

    fetch(url + `/` + id, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title.value,
            body: body.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            let postTitles = document.querySelectorAll('.post-title') // 100 post titles [0 -99]
            let postBodies = document.querySelectorAll('.post-body')
            console.log(postTitle)
            postTitles.forEach((postTitle, index) => {
                if (index + 1 === id) {
                    if (data.title !== "") {
                        postTitle.innerHTML = data.title
                    }
                }

            })

            postBodies.forEach((postBody, index) => {
                if (index + 1 === id) {
                    if (data.body !== "") {
                        postBody.innerHTML = data.body
                    }
                }

            })

        });
}

//Create a function to render UI
function renderUI (arr) {
    let html = '';
    arr.forEach(posts => {
        html += `
        <section class="d-flex justify-content-around">
                <div class="w-100 d-flex flex-wrap container justify-content-center flex-direction-column mt-5 gy-5 align-items-center ">
                    <div class="posts card p-3 m-3 w-25">
                    <h4>${posts.id}</h4>
                    <p>${posts.title}</p>
                    <p>${posts.body}</p>
                        <div class="btn-container d-flex justify-content-around border-none round-3 w-100 p-5">
                            <button class="btn-success p-2 border-0 rounded-pill" onclick="updatePost(${posts.id})">UPDATE</button>
                            
                            <button class="btn-warning p-2 mx-2 border-0 rounded-pill" onclick='openSingle(${posts.id})'>VIEW</button>

                            <button class="btn-danger p-2 border-0 rounded-pill" onclick="deletePost(${posts.id})">DELETE</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
        layout.innerHTML = html;
    })
}