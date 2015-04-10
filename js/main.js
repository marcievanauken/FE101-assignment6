$(document).ready(function () {

	console.log('hello'); //testing to see if js is linking properly

	$('input').on(multInputs);
	function multInputs() {
		$('.inputMult').each (function () {
			var $val1 = $('.val1').val();
			var $val2 = $('.val2').val();
			var $val3 = $('.val3').val();

			var $total = $val1 * $val2 * $val3;

		});
		$('.answer').text($total);
	}


});