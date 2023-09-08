L.control.maptilerGeocoding({ apiKey: key }).addTo(map);




const detailsElement = document.querySelector('.details-example');

detailsElement.addEventListener('toggle', event => {
    if (event.target.open) {
        console.log('open');
    } else {
        console.log('closed');
    }
});