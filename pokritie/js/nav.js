jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
jQuery(document).ready(function($){
	$('<style>'+
		'.scrollTop{ display:none; z-index:9999; position:fixed;'+
			'bottom:20px; left:100%; margin-left:-165px; width:145px; height:42px;'+
			'background:url(../images/top.png) 0 0 no-repeat; }' +
		'.scrollTop:hover{ background-position:0 0;}'
	+'</style>').appendTo('body');
	var
	speed = 500,
	$scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');		

	$scrollTop.click(function(e){
		e.preventDefault();

		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});
	//���������
	function show_scrollTop(){
		( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();

});