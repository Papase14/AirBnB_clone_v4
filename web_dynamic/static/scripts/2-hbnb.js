$(document).ready(function() {
    // Initialize an empty dictionary to store Amenity IDs
    const amenityIDs = {};

    // Function to update the amenities h4 tag
    function updateAmenitiesList() {
        const amenitiesList = Object.values(amenityIDs).join(', ');
        $('.amenities h4').text(amenitiesList);
    }

    // Function to check the API status
    function checkAPIStatus() {
        $.ajax({
            type: 'GET',
            url: 'http://0.0.0.0:5001/api/v1/status/',
            success: function(response) {
                if (response.status === 'OK') {
                    // API is available, add the 'available' class
                    $('#api_status').addClass('available');
                } else {
                    // API is not available, remove the 'available' class
                    $('#api_status').removeClass('available');
                }
            },
            error: function() {
                // Handle errors here if needed
                console.error('Error checking API status');
            }
        });
    }

    // Initial check of API status
    checkAPIStatus();

    // Listen for changes on each input checkbox
    $('input[type="checkbox"]').change(function() {
        const checkbox = $(this);
        const amenityID = checkbox.data('amenity-id');
        const amenityName = checkbox.data('amenity-name');

        if (checkbox.prop('checked')) {
            // Checkbox is checked, add Amenity ID to the dictionary
            amenityIDs[amenityID] = amenityName;
        } else {
            // Checkbox is unchecked, remove Amenity ID from the dictionary
            delete amenityIDs[amenityID];
        }

        // Update the h4 tag with the list of checked Amenities
        updateAmenitiesList();
    });
});
