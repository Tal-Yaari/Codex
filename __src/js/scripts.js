
	$.getJSON('http://time.jsontest.com', function(data) {

		var time = data.time;

		$( '.time' ).html( time );

	});


	$.getJSON('http://ip.jsontest.com/', function(data) {

		var ip = data.ip;

		$( '.ip' ).html( ip );

	});

	$.getJSON('http://headers.jsontest.com/', function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( val);
		});

		var lang = items[6].slice(0,5);


		$( '.language' ).html( lang );

	});



