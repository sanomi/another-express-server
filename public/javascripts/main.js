'use strict';
console.log('main.js!!!');


$(document).ready( function() {
	$('body').append('<input></input>').append('<button>Submit</button>');
	$('button').on('click', function() {
			console.log('pressed');
			var data = $('input').val();
			$.ajax({
				method: 'POST',
				url: "/users",
				data: data
			}).done(function() {
				if ( $('p').text() === 'Users: ' ) {
				$('p').append(data);
				} else {
					$('p').append(', '+data);
				}
			})
	})
})