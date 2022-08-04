let layout = document.querySelector('.list-holder')
let title= document.querySelector('#title')
let userId = document.querySelector('#identify')
let form = document.querySelector('#main-form')
let url = 'https://jsonplaceholder.typicode.com/albums'

let albums = []

// get a list of albums
function getAlbums() {
    fetch (url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let html = ''
        data.forEach(album => {
            html += `
            <li class="album">
                <h4>${album.title}</h4>
                <p>${album.id}</p>
                <p>${album.userId}</p>
            </li>
            `
        });
        layout.innerHTML = html
    })
}

getAlbums()

FormData.addEventListener('submit', createAlbum)

function createAlbums(e) {
    e.preventDefault()
    let titleContent = title.value
    let userIdContent = userId.value
    console.log({'title': titleContent, 'userId': userIdContent})

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({'title': titleContent,
        'userId': userIdContent}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        albums.push(data)
        let html = ''
        data.forEach(album => {
            html += `
            <li class="album">
                <h4>${album.title}</h4>
                <p>${album.id}</p>
                <p>${album.userId}</p>
            </li>
            `
        });
        getAlbums()
    })

}