/*!
 * Enhance anchor links with scroll animation 
 * 
 * @version 1.1
 * @author Zonear Ltd. <contact@zonear.com>
 */
;(function(document, $) {	
	$(document).ready(function() {
		
		// Select all anchor links
		$('a[href^=#]').each(function(i, el) {
			var $el = $(el);
			
			// Skip empty links
			if($el.attr('href') == '#') { return; }
			
			// Set click handlers
			$el.click(function(event) {
				event.preventDefault();
				
				// Scroll to element
				$('html, body').animate({
			         scrollTop: $($(this).attr('href')).offset().top
			    }, {
			    	duration: 500,
			    	easing: 'swing'
			    });
			    
				// Add history with pushState
				if(window.history && window.history.pushState) {
					window.history.pushState({}, document.title, $(this).attr('href'));
				}
			});
		});
	
	});	
})(document, jQuery);