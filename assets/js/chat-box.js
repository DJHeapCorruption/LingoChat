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

var chosenUser = stockUsers[0].name

//TODO: Save stock user messages to local storage

function stockUserChat () {
    var userName = $('#stock-user-name');
    userName.text(chosenUser);
    var greetingText = `Hello, I'm ${stockUsers[0].name}. I like ${stockUsers[0].hobbies[0]} and ${stockUsers[0].hobbies[1]}. What about you?`;
    var stockUserWords = greetingText.split(' ');
    console.log(stockUserWords);

    var stockUserMessageBubble = $('<div>');
    stockUserMessageBubble.addClass('user-message flex items-center self-end rounded-xl rounded-tr bg-blue-500 py-2 px-3 text-white');

    for (var i = 0; i <= stockUserWords.length -1; i++) {
        var spanEl = $('<span>');
        spanEl.html(`&nbsp;${stockUserWords[i]}`);
        stockUserMessageBubble.append(spanEl);
    }
    chatWindow.append(stockUserMessageBubble);
}

stockUserChat();


/*console.log(chosenUser);

function stockUserChat () {

}

var stockUserSideBarList = $('#stock-user-side-bar');

stockUserSideBarList.on('click', function(event){
    var chosenUser = event.target;
})*/

//Sending messages funcitnality

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