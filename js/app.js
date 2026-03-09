// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

// Event Listeners
eventListeners()

function eventListeners() {

    // evento cuando un usuario añade nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    // evento cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        crearHTML()
    })
}

// Funciones
function agregarTweet(e) {
    e.preventDefault()

    // text area donde escribe el usuario
    const tweet = document.querySelector('#tweet').value

    if (tweet === '') {
        mostrarError('Mensaje no puede ir vacio');
        return // evitar se ejecuten mas lineas de codigo en la función
    }

    // crear el objeto tweet
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // añadir objeto tweet al arreglo
    tweets = [...tweets, tweetObj]

    // construir HTML para mostrar lista tweets
    crearHTML()

    // reiniciar formulario
    formulario.reset()
}

function mostrarError(msjError) {
    const elementoErrror = document.createElement('P')
    elementoErrror.textContent = msjError
    elementoErrror.classList.add('error')

    const contenedor = document.querySelector('#contenido')
    contenedor.appendChild(elementoErrror)

    // Eliminar la alerta de error
    setTimeout(() => {
        elementoErrror.remove()
    }, 3000);
}

function crearHTML() {

    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            const btnEliminar = document.createElement('A')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X'
            btnEliminar.onclick = () => {
                eliminarTweet(tweet.id)
            }

            const li = document.createElement('LI')
            li.textContent = tweet.tweet
            li.appendChild(btnEliminar)
            listaTweets.appendChild(li)
        })
    }

    // guardar tweets en el storage
    sincronizarStorage()
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function eliminarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)
    crearHTML()
}

function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}
