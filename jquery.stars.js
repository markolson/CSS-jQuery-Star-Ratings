(function($){
  $.fn.rating = function() {
    return this.each(function() {
		var rating = $(this).data('current'); rating = rating ? rating : 0;
		var stars = $(this).data('stars'); stars = stars ? stars : 5;
		for(var i = 1; i <= stars; i++) { 
			var a = $('<a>', {href: '#', html: '&#9733;'});
			if(i <= rating) { a.addClass('set on') }
			$(this).append(a);
		}
		
		$(this).find('a').mouseenter(function(e) { 
			var t = $(this);
			t.parent('.rating').find('a').removeClass('on');
			t.prevAll().addClass('on');
			t.addClass('on');
		});

		$(this).mouseleave(function(e) {
			var t = $(this);
			t.find('a.set').addClass('on');
			t.find('a:not(.set)').removeClass('on');
		});
		
		$(this).click(function(e) {
			var t = $(this);
			t.find('a').removeClass('set');
			t.find('a.on').addClass('set');
			t.trigger('rated', [t.find('.on').length, t.find('a').length])
		});
		
    });
  }
})(jQuery);