var textSubmitBtn = $('#send-text');
var chatWindow = $('#chat-window');
var chatHistory = JSON.parse(localStorage.getItem('history')) || [];


function getChatHistory () {
    $('.messages').remove();
    for (var i = 0; i < chatHistory.length; i++) {
        var text = $('<p>');
        text.addClass('messages');
        var textBubble = $('<div>');
        textBubble.addClass('flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-4 px-3');

        text.text(chatHistory[i]);
        textBubble.append(text);
        chatWindow.append(textBubble);
    }
}
getChatHistory();

textSubmitBtn.on('click', function(event) {
    event.preventDefault();
    var message = $('#message').val();
    chatHistory.push(message);
    localStorage.setItem('history', JSON.stringify(chatHistory));

    var newText = $('<p>');
    newText.addClass('messages');
    var newTextBubble = $('<div>');
    newTextBubble.addClass('flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-4 px-3');
    newText.text(message);
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