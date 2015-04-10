//i definitley used google to help me with this, I am surprised I got it to work and only slightly understand what's going on...

counter = function() {
	var value = $('.wordNums').val();

	if (value.length == 0) {
		$('#wordCount').html(0);
		return;
	}

	var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;

    $('#wordCount').html(wordCount);
}


$(document).ready(function () {

	console.log('hi'); //testing to see if js is linking properly

	$('#count').click(counter);
    $('#text').change(counter);
    $('#text').keydown(counter);
    $('#text').keypress(counter);
    $('#text').keyup(counter);
    $('#text').blur(counter);
    $('#text').focus(counter);

	

});