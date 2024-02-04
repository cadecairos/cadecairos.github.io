$(function(){
	$('pre').addClass('prettyprint');
	prettyPrint();

  $('.icon-twitter').click(function(e) {
    window.open(e.target.href, 'twitter-share', 'width=550,height=235');
    return false;
  });

  $('.icon-facebook').click(function(e) {
    window.open(e.target.href, 'facebook-share', 'width=550,height=235');
    return false;
  });

  $('.icon-google-plus').click(function(e) {
    window.open(e.target.href, 'google-plus-share', 'width=550,height=235');
    return false;
  });
});
