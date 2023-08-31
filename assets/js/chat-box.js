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

const url = `https://nlp-translation.p.rapidapi.com/v1/translate?text=${textTranslate}&to=en&from=es`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d9e5babc2msh4a699bd8809f2d1p1b25f1jsn7ee5db675949',
		'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}