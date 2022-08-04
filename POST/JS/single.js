function renderSingle() {
    let newObject = localStorage.getItem('viewedPost')
    console.log(newObject);
    let post = id.parse(newObject)
    console.log(post)
    document.getElementById('title').innerHTML = post.title
    document.getElementById('body').innerHTML = post.body
}

renderSingle(new0bject);
//Set date for copyright
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))