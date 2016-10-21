$(document).on("keypress", "form", function(event){
	return event.keyCode !=13;
});


loadAndButtons();
$('#addbutton').on('click', function(){
	if($('#fullname').val().length>50 && $('#fullname').val().trim() != '')
		alert('Full names must be entered as less than 50 characters');
	else if($('#phonenumber').val().length> 50 && $('#phonenumber').val().trim() != "" && $("#phonenumber").val().length>9){
		alert('Phone numbers must be 10 digits long.');
		return;
	}
	else {
		$.post('http://www.bmoseley.com/ajax/addrecord.php', { fullname: $('#fullname').val(), phonenumber: $('#phonenumber').val()});

		loadAndButtons();
		$('#fullname').val('');
		$('#phonenumber').val('');
	};
});

$('#removebutton').on('click', function(){
	var ids = $('#entrynumber').val();
	$.post('http://www.bmoseley.com/ajax/deleterecord.php', {id: ids}, function(){
		$('#entrynumber').val('');
		loadAndButtons();
	})

});




function loadAndButtons(){
	$('#recordlisting').load('http://www.bmoseley.com/ajax/listrecords.php', function(){
		$('.fullname a').each(function(){
			$(this).after('<span> #'+this.id +'</span>');
		});
	});
};
