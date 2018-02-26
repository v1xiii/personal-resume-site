var imageArray = [
	"megatron.png",
	"starscream.jpg",
	"soundwave.jpg",
	"shockwave.jpg",
	"devastator.jpg",
	"astrotrain.jpg",
	"blitzwing.jpg",
	"thrust.jpg",
	"rumble.png",
	"ravage.jpg",
	"laserbeak.jpg",
	"reflector.jpg"
];

//var target = document.getElementById('target');
//this is apparently not needed?

var counter = 0;

function next() {
	counter = counter + 1;
	if (counter > imageArray.length -1) {
		counter = 0;
	}
	target.src = imageArray[counter];
}

function previous() {
	counter = counter - 1;
	if (counter < 0) {
		counter = 11;
	}
	target.src = imageArray[counter];
}

function random() {
	counter = Math.ceil(Math.random()*12)-1;
	target.src = imageArray[counter];
}