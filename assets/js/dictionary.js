//Definition API Functionality

var userMessage = $('.user-message');
var wordToDefine;

userMessage.on('click', function(event) {
    var clickedWord = event.target;
    wordToDefine = clickedWord.innerText;
    wordDefiner();
})

var wordDefiner = function() {
    var dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToDefine}`;

    fetch(dictionaryUrl)
        .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('Unable to define word.')
        }
    })
    .catch(function (error) {
        alert('Could not define word at this time.')
    })
}

