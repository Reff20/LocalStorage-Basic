const publication = JSON.parse(localStorage.getItem('publication')) || []

document.querySelector('button').addEventListener('click', function () {
    const username = document.querySelector('#inputUsername').value
    const image = document.querySelector('#inputUrl').value
    const description = document.querySelector('#inputDesc').value

    publication.unshift(
        {
            username,
            image,
            description,
        }
    )
    saveLocalStorage()
    clearInputs()
})

function saveLocalStorage() {
    localStorage.setItem('publication', JSON.stringify(publication))
}

function clearInputs() {
    document.querySelector('#inputUsername').value = ''
    document.querySelector('#inputUrl').value = ''
    document.querySelector('#inputDesc').value = ''
}