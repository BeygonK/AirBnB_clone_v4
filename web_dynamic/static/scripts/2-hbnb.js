$(document).ready(function() {
   const selectedAmenities = {};
   
   $('input[type="checkbox"]').change(function() {
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');

      if (this.checked) {
         selectedAmenities[amenityId] = amenityName;
      } else {
          delete selectedAmenities[amenityId];
      }
      
      const amenitiesList = Object.values(selectedAmenities).join(', ');
	   $('.amenities h4').text(amenitiesList || '\xa0');
   });


	// Code to check API status
     $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
	if (data.status === 'OK') {
	     $('#api_status').addClass('available');
	} else {
	     $('#api_status').removeClass('available');
	}
  }).fail(function() {
    $('#api_status').removeClass('available');
  });
});
