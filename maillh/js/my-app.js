// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {
       // definition of letters and pages for each letter
       letters: [
       		 {
				  title: '30 March 1918',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 39.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 40.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 41.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 42.jpeg',
				  },
				  ],
       		 },       		       		 
			{       		
				  title: '9 April 1918',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 4.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 5.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 6.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 7.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 8.jpeg',
				  },

				  ],
       		 },
       		  {
				  title: '20 April 1918',
				  pages: [
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 1.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 3.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 2.jpeg',
				  },
				  ],
			  },		  
       		 {
				  title: '4 May 1918',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 32.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 33.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 34.jpeg',
				  },
				  ],
       		 },			  
       		 {
				  title: '8 October 1918 Postmark 10/14 (1)',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 46.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 47.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 48.jpeg',
				  },
				  ],
       		 },
       		 {
				  title: '8 October 1918 Postmark 10/14 (2)',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 49.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 50.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 51.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 52.jpeg',
				  },				  
				  ],
       		 },
       		 {
				  title: '8 October 1918 Postmark 10/17',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 53.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 54.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 55.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 56.jpeg',
				  },				  
				  ],
       		 },       		        		 
       		 {
				  title: '1 January 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 57.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 58.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 59.jpeg',
				  },				  
				  ],
       		 },       		 
       		 {
				  title: '13 January 1919 postmark',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 62.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 63.jpeg',
				  },				  
				  ],
       		 },       		 
       		 {
				  title: '21 February 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 60.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 61.jpeg',
				  },				  
				  ],
       		 },
       		 {
				  title: '9 March 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 35.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 36.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 37.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 38.jpeg',
				  },
				  ],
       		 },       		 
     		 {
				  title: '10 March 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 43.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 44.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 45.jpeg',
				  },
				  ],
       		 },
       		 {
				  title: '29 March 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 23.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 24.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 25.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 26.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 27.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 28.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 29.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 30.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 31.jpeg',
				  },
				  ],
       		 },
       		 {
				  title: '6 April 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 18.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 19.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 20.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 21.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 22.jpeg',
				  },

				  ],
       		 },
       		 {
				  title: '26 April 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 13.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 14.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 15.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 16.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 17.jpeg',
				  },

				  ],
       		 },       		 
       		 {
				  title: '11 June 1919',
				  pages: [
				  {
				  url: "http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 9.jpeg",
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 10.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 11.jpeg',
				  },
				  {
				  url: 'http://digitalminot.minotstateu.edu/lhi/lhisjpg/Scan 12.jpeg',
				  },

				  ],
       		 },
       ],       
    }
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});

var titlehidden = false;

myApp.onPageInit('letters', function(page) {
	$$('.showimages').on('click', function() {
	var id = $$(this).parents('li').attr('data-id');
	var params = myApp.template7Data.letters[id].pages;
	var tstr = { photos: params, type: 'standalone', swipeToClose: false, lazyLoading: true, backLinkText:'Close', spaceBetween: 0, theme: 'dark' };

	myPhotoBrowser = myApp.photoBrowser(tstr);
	myPhotoBrowser.open();
  
  });
});

myApp.onPageInit('letters', function(page) {
	$$('.page-content').on('scroll', function() {
	var pos = $$(this).scrollTop();
	if(pos > 35) {
		if(pos < 45) {$$('.navbar').find('.toggletitle').html('<div class="animated fadeIn">Hartnett Letters</div>');
		}

	} else {
		if (pos < 35) {
			$$('.navbar').find('.toggletitle').html('');
			}
		
	}
	})
});
