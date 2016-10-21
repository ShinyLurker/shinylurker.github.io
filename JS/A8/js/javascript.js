

function addEvent() {
	var addedevent = $('#eventlist div:first').clone();
	if($('#eventcategory').hasClass('ng-dirty')){
		if($('#eventname').val().trim()== '')
			alert('Please enter an Event Name.')
		else{
			addedevent.hide();
			$('#eventlist').append(addedevent);
			addedevent.slideDown(500);
		}
	}
	else
		alert('Please select a category.');
}

$('#buttonall').on('click', function(){
	$('.arts').slideDown(500);
	$('.athletic').slideDown(500);
	$('.faculty').slideDown(500);
	$('.students').slideDown(500);
});


$('#buttonarts').on('click', function(){
	$('.arts').slideToggle(500);
});


$('#buttonathletic').on('click', function(){
	$('.athletic').slideToggle(500);
});


$('#buttonfaculty').on('click', function(){
	$('.faculty').slideToggle(500);
});


$('#buttonstudents').on('click', function(){
	$('.students').slideToggle(500);
});

