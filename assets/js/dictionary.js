// Definition API Functionality
var userMessage = $('.user-message');

var modalContent = document.querySelector('#popup-modal .text-center');
modalContent.innerHTML = 
`<svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Definition of "${wordToDefine}":</h3>
    <p>${definition}</p>
    <h3 class="mt-4 mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">Example:</h3>
    <p>${example}</p>`;


var wordToDefine;
var definition;
var moreInfo = function (data) {

}

userMessage.on('click', function(event) {
    var clickedWord = event.target;
    var punctuation = /[\.,?!]/g;
    wordToDefine = clickedWord.innerText.replace(punctuation,"");;
    wordDefiner();
});

var openModal = function() {
    // Trigger for the modal to show
    var modal = document.getElementById('popup-modal');
    modal.classList.remove('hidden');
};

var wordDefiner = function() {
    var dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToDefine}`;

    fetch(dictionaryUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    // Assuming the API response structure contains a definition field
                    if (data) {
                        console.log(data)
                        definition = data[0].meanings[0].definitions[0].definition;
                        example = data[0].meanings[0].definitions[0].example;

                        // Update modal content with definition and example
                        openModal();
                    } else {
                        modalContent.innerHTML = `<p>No definition found for "${wordToDefine}".</p>`;
                    }
                });
            } else {
                modalContent.innerHTML = `<p>Oops! The version of this word wasn't found in the dictionary!</p>`;
            }
        })
        .catch(function (error) {
            modalContent.innerHTML = `<p>Could not define your word at this time.</p>`;
        })
};