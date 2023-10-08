$(document).ready(function () {
    // Function to create a Place article tag
    function createPlaceArticle(place) {
        const article = $('<article>');

        const titleBox = $('<div class="title_box">');
        titleBox.append(`<h2>${place.name}</h2>`);
        titleBox.append(`<div class="price_by_night">$${place.price_by_night}</div>`);

        const information = $('<div class="information">');
        information.append(`<div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>`);
        information.append(`<div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>`);
        information.append(`<div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>`);

        const description = $('<div class="description">');
        description.append(`${place.description}`);

        article.append(titleBox);
        article.append(information);
        article.append(description);

        return article;
    }

    // Function to update the places section with results
    function updatePlacesSection(places) {
        const placesSection = $('.places');
        placesSection.empty();

        places.forEach(function (place) {
            const article = createPlaceArticle(place);
            placesSection.append(article);
        });
    }

    // Send a POST request to fetch places data
    fetch('http://0.0.0.0:5001/api/v1/places_search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
        .then(response => response.json())
        .then(data => {
            updatePlacesSection(data);
        })
        .catch(error => {
            console.error('Error fetching places data:', error);
        });
});
