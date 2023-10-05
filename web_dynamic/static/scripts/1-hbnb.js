$(document).ready(function() {
    // Initialize an empty dictionary to store Amenity IDs
    const amenityIDs = {};

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
        const amenitiesList = Object.values(amenityIDs).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});
