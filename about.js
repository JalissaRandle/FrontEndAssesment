console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', () => {
	alert('you are about to submit')
});
let duck = document.getElementById("rubber-duck")
duck.addEventListener('mouseover', () => {
	alert('you are beautiful')
})