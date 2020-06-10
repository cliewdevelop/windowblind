$(document).ready(function() {
  
  $('#width_inches_input').on('change', (e) => {
	console.log(e.target.value);
	$('.horizontal-resizable').css('width', `${e.target.value*3}px`)
	});

  $('#height_inches_input').on('change', (e) => {
	console.log(e.target.value);
	$('.vertical-resizable').css('height', `${e.target.value*3}px`)
	});

  $("#ex4").slider({
	reversed : true
	});

  $("#ex4").on("slide", function(slideEvt) {
	console.log(slideEvt.value)
	$('#blind-section').css('filter', `brightness(${slideEvt.value}%)`)
	});

  $(".round_button").on("click", function(event){

	let background;
	switch (event.target.value){
		case 'gray': 
			background = './assets/background3.jpg';
			break;
		case 'beige': 
			background = './assets/background4.jpg';	
			break;
		case 'white': 
			background = './assets/background6.jpg';
			break;
		default:
			background = './assets/background7.jpg';
	}
	

	$('#blind-section').css('background-image', `url(${background})`);
	});
});


