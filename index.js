function addingEventListener() {

const input = document.getElementById('input')
input.addEventListener('click', function(event) {
  alert('I was clicked!')
})
}

function greet(string) {

	let hour = string.split(":")

	let hours = parseInt(hour[0]) 

	console.log(hours)


	if(hours < 12) {
		return console.log("Good Morning")
	}

	if (12 < hours && hours < 17) {

		return console.log("Good Afternoon")
	}

	if (17 < hours && hours < 24) {

		return console.log("Good Evening")
	}
}
