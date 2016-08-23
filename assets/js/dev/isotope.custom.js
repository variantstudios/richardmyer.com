$( document ).ready(function() {
  // activate jquery isotope
  var $container = $('#sculptures').isotope({
    itemSelector : '.grid__item',
    isFitWidth: true
  });

  $container.isotope({ filter: '*' });
    // filter items on button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
});
