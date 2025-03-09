const socket = new WebSocket('ws://localhost:3000')

function sendMessage(e) {
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
        socket.send(input.value)
        input.value = ""
    }
    input.focus()
}

function HelloWorld() {
    alert('Hello World!')
}

/*
 * Sets the current page to a new set of elements
 *
 * @param {String} screenId - will set the screen based on the div's id.
 */
function setScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active')
    })
    document.getElementById(screenId).classList.add('active')
}

setScreen('server-test-screen')
//setScreen('battle-screen')

document.querySelector("form").addEventListener("submit", sendMessage)

socket.addEventListener("message", ({ data }) => {
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li)
})

document.querySelector(".fight-btn").addEventListener("click", () => {
    HelloWorld()
})