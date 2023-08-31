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