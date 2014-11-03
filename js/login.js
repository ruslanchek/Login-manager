$(function(){
	$('.login header .icon').hover(function(){
		$('.login header').css({
			background: $(this).data('color') 
		});
	}, function(){
		$('.login header').css({
			background: '#37404C'
		});
	});

	$('#go-restore-password').on('click', function(){
		$('.flip-container').addClass('rotate');
	});

	$('#go-login').on('click', function(){
		$('.flip-container').removeClass('rotate');
	});
});