const listaTweets = document.getElementById('lista-tweets')




// Event Listeners
eventListeners()

function eventListeners() {

	document.querySelector('#formulario').addEventListener('submit', agregarTweet)
}


// Functions

// Add tweet of form
function agregarTweet(e) {
	e.preventDefault()
	// Read the value of textarea
	const tweet = document.getElementById('tweet').value
	// Create button delete
	const botonBorrar = document.createElement('a')
	botonBorrar.classList = 'borrar-tweet'
	botonBorrar.innerText = 'X'

	// create element and add the content to the list
	const li = document.createElement('li')
	li.innerText = tweet
  // Add the button fordelete the tweet
	li.appendChild(botonBorrar)
	// Add the tweet into the list
	listaTweets.appendChild(li)
}
