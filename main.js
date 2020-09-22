function toggleMenu() {
  var x = document.getElementById('topnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  }
  else {
    x.className = 'topnav';
  }
}

// Closing menu when clicking anywhere else on site
$('body').click(function(evt){
  if(evt.target.name != "menu-outline"){
    $('#topnav').removeClass('responsive');
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function() {
  $('#topnav').load('navbar.html')
})