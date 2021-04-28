let feed = document.querySelector('.container')
let publi = JSON.parse(localStorage.getItem('publication'))

for(i of publi){
    let post = document.createElement('div')
    post.setAttribute('class','post')

    let user = document.createElement('h3')
    user.textContent = '@'+i.username

    let img = document.createElement('img')
    img.setAttribute('src',i.image)

    let desc = document.createElement('p')
    desc.textContent = 'Description: '+i.description

    post.appendChild(user)
    post.appendChild(img)
    post.appendChild(desc)

    feed.appendChild(post)
}