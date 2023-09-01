var textSubmitBtn = $('#send-text');
var chatWindow = $('#chat-window');

textSubmitBtn.on('click', function(event) {
    var message = $('#message').val();
    var newText = $('<p>');
    var newTextBubble = $('<div>');
    newText.text(message);
    newTextBubble.addClass('flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-4 px-3')
    newTextBubble.append(newText);
    chatWindow.append(newTextBubble);
    $('#message').val('');
});

var wordToDefine = 'hello';

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
            alert('Error: ' + response.statusText)
        }
    })
    .catch(function (error) {
        alert('unable to find translation')
    })
}

wordDefiner();