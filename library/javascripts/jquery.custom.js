jQuery(document).ready(function ($) {

	// Flex Slider ///////////////////////////////////////////////////////////////////////////////////////////////
	$('.flexslider').flexslider({
		animation: "slide",			//String: Select your animation type, "fade" or "slide"
		smoothHeight: true,			//Boolean: Allow height of the slider to animate smoothly in horizontal mode
		slideshow: false,			//Boolean: Animate slider automatically
		slideshowSpeed: 7000,		//Integer: Set the speed of the slideshow cycling, in milliseconds
		animationSpeed: 600,		//Integer: Set the speed of animations, in milliseconds
		pauseOnHover: true			//Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
	});

	// Image opacity efects ///////////////////////////////////////////////////////////////////////////////////////////////
	$('.hover-overlay').each(function() {
		$(this).hover(
			function() {
				$(this).stop().animate({ opacity: 0.6 }, 300);
			},
			function() {
				$(this).stop().animate({ opacity: 1.0 }, 300);
		});
	});
	
	// Primary nav ///////////////////////////////////////////////////////////////////////////////////////////////
	$('#primary-nav').superfish({
		delay: 200,
		animation: {opacity:'show', height:'show'},
		speed: 'fast',
		autoArrows: false,
		dropShadows: false
	});
	$('#primary-nav').mobileMenu({
		defaultText: 'Navigate to...',
		className: 'mobileMenu',
		subMenuDash: '&ndash;'
	});
	
	// Toggles ///////////////////////////////////////////////////////////////////////////////////////////////////
	$(".toggle").each( function () {
		if(jQuery(this).attr('data-id') === 'closed') {
			$(this).accordion({ header: 'h5', collapsible: true, active: false  });
		} else {
			$(this).accordion({ header: 'h5', collapsible: true});
		}
	});
	
	// Tabs ///////////////////////////////////////////////////////////////////////////////////////////////
	$('.tabs').tabs({ fx: { opacity: 'show'} });

	// Twitter ///////////////////////////////////////////////////////////////////////////////////////////////////
	$(".tweet").tweet({
		username: "google",									//Type your Twitter username
		template: "{join}{text}{time}",
		join_text: null,
		avatar_size: null,
		count: 1,											//Type number of tweets to show
		loading_text: "Loading tweets, please wait..."		//Type text wich will show wilr loading
	});

	// Testimonials //////////////////////////////////////////////////////////////////////////////////////////////
	$(".testimonialrotator").testimonialrotator({
		settings_slideshowTime:3
	});

	// Fancybox //////////////////////////////////////////////////////////////////////////////////////////////
	$('.fancybox').fancybox();

	// Filterable portfolio //////////////////////////////////////////////////////////////////////////////////////////////
	$(function() {
		var $container = $('#filterable-portfolio');
			$select = $('#filters select');
	
			$container.isotope({
				resizable: false,
				masonry: { columnWidth: $container.width() / 12 }
			});
	
		$(window).smartresize(function(){
			$container.isotope({
				masonry: { columnWidth: $container.width() / 12 }
			});
		});
	
		$container.isotope({
			itemSelector : '.portfolio-item'
		});
		  
		$select.change(function() {
			var filters = $(this).val();
				$container.isotope({
					filter: filters
			});
		});
		  
		var $optionSets = $('#filters .option-set'),
			$optionLinks = $optionSets.find('a');
	
		$optionLinks.click(function(){
			var $this = $(this);
	
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
	  
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
	
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
				changeLayoutMode( $this, options )
			} else {
				$container.isotope( options );
			}
			
			return false;
		});
	});

});