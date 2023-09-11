var textSubmitBtn = $('#send-text');
var chatWindow = $('#chat-window');
var chatHistory = [];
for(i=0;i<stockUsers.length;i++){
    chatHistory.push([]);
}
var userIndex;

function initChat() {
    userIndex = localStorage.getItem("userIndexLS");
    localStorage.setItem("userIndexLS", userIndex);
    chosenUser = stockUsers[userIndex].name;
    console.log("user index: "+userIndex);
    var userName = $('#stock-user-name');
    userName.text(chosenUser);

    var storedHistory = localStorage.getItem("history");

    if (storedHistory) {
        chatHistory = JSON.parse(storedHistory);
    } else {
        stockUserChat();
    }

    if (!chatHistory[userIndex] || chatHistory[userIndex].length === 0) {
        stockUserChat();
    }

    getChatHistory();
}


function getChatHistory () {
    $('.messages').remove();
    console.log(chatHistory[userIndex].length);
    for(var i=0;i<chatHistory[userIndex].length;i++){
        console.log(chatHistory[userIndex][i]);
        printMessage(chatHistory[userIndex][i]);
    }
/*    for (var i = 0; i < chatHistory[userIndex].length; i++) {
        var text = $('<p>');
        text.addClass('messages');
        var textBubble = $('<div>');
        textBubble.addClass('w-3/4 flex items-center self-start rounded-xl rounded-tl py-4 px-3');
        if(chatHistory[userIndex][i].isUser){
            textBubble.addClass("self-start bg-gray-300");
        } else {
            textBubble.addClass("self-end bg-blue-500 text-white");
        }
        text.text(chatHistory[userIndex][i].text);
        textBubble.append(text);
        chatWindow.append(textBubble);
    }
*/
}

function printMessage(messageObject){
    console.log(messageObject.text);
    var textBubble = $('<div>');
    textBubble.addClass('w-3/4 flex items-center self-start rounded-2xl py-4 px-3');
    if(messageObject.isUser){
        textBubble.addClass("self-start bg-light_cyan rounded-tl");
    } else {
        textBubble.addClass("self-end bg-blue-500 text-white rounded-tr");
    }

    var textArr = messageObject.text.split(" ");
    console.log(textArr);
    for(i=0; i<textArr.length; i++){
        var spanEl = $("<span>");
        spanEl.html(`&nbsp;${textArr[i]}`);
        spanEl.addClass("user-message");
        textBubble.append(spanEl);
    }
    
    chatWindow.append(textBubble);
    return;
}

function stockUserChat () {
    var storedHistory = localStorage.getItem("history");
    chatHistory = storedHistory ? JSON.parse(storedHistory) : [];

    var greetingText = `Hello, I'm ${stockUsers[userIndex].name}. I like ${stockUsers[userIndex].hobbies[0]} and ${stockUsers[userIndex].hobbies[1]}. What about you?`;

    if (!Array.isArray(chatHistory[userIndex])) {
        chatHistory[userIndex] = [];
    }

    chatHistory[userIndex].push({text: greetingText, isUser: false});
    localStorage.setItem("history", JSON.stringify(chatHistory));

    // Rest of the function...
}


/*    for (var i = 0; i <= stockUserWords.length -1; i++) {
        var spanEl = $('<span>');
        spanEl.html(`&nbsp;${stockUserWords[i]}`);
        stockUserMessageBubble.append(spanEl);
    }
    chatWindow.append(stockUserMessageBubble);
*/

/*console.log(chosenUser);

function stockUserChat () {

}

var stockUserSideBarList = $('#stock-user-side-bar');

stockUserSideBarList.on('click', function(event){
    var chosenUser = event.target;
})*/

//Sending messages funcitnality


function collectMessage(event){
    event.preventDefault();
    if($("#message").val()){
        var message = $('#message').val();
        chatHistory[userIndex].push({text:message, isUser: true});
        localStorage.setItem('history', JSON.stringify(chatHistory));
        printMessage({text:message, isUser: true});
        $("#message").val("");
        /*
        var newText = $('<p>');
        newText.addClass('messages');
        var newTextBubble = $('<div>');
        newTextBubble.addClass('w-3/4 flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-4 px-3');
        newText.text(message);
        newTextBubble.append(newText);
        chatWindow.append(newTextBubble);
        $('#message').val('');
        */
    }
}

textSubmitBtn.on('click', collectMessage);

document.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        collectMessage(event);
    }
});


initChat();