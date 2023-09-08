// Definition API Functionality
var wordToDefine;
var definition;
function header(exampleData, synonymData) {
    if (exampleData) {
        return 'Example:'
    } else if (!exampleData && synonymData.length > 0) {
        return 'Synonym:'
    } else {
        return 'No additional information found'
    }
}

chatWindow.on('click', function (event) {
    var punctuation = /[\.,?!]/g;
    var clickedWord = event.target.textContent.trim().replace(punctuation, '');

    if (clickedWord.length > 0) {
        wordToDefine = clickedWord;
        wordDefiner();
    }
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
                        var exampleData = definitionSifter(data, 'example');
                        var synonymData = definitionSifter(data, 'synonyms');

                        var modalContent = document.querySelector('#popup-modal .text-center');
                        modalContent.innerHTML = 
                        `<svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Definition of "${wordToDefine}":</h3>
                            <p>${definition}</p>
                            <h3 class="mt-4 mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">${header(exampleData, synonymData)}</h3>
                            <p>${exampleData || synonymData || 'No additional information found'}</p>`;                       
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

function definitionSifter(data, propertyToFind) {
    if (data[0].meanings[0].definitions) {
        var matchingDefinition = data[0].meanings[0].definitions.find((definition) => definition[propertyToFind]);
        if (matchingDefinition) {
            definition = matchingDefinition.definition;
            return matchingDefinition[propertyToFind];
        }
    }
    return null;
}
