$( document ).ready( function () {

	var mobileNav = $( '.mobile-nav' )

	$('html').click(function() {
		mobileNav.next().hide();
	});


	mobileNav.click( function ( event ) {
		event.stopPropagation();
		$( this ).next().toggle();
	} )

} );