var userButton = $(".user-button")
var chosenUser;

function enterChat(event){
    chosenUser = event.target.dataset.id;
    console.log(event.target.dataset.id);
    localStorage.setItem("userIndexLS", chosenUser);
    document.location.href= "chat-box.html";
}

userButton.on("click", enterChat);

/*
    displayUser.setAttribute("class","user-button active:bg-non_photo_blue-300 text-center items-center p-2 text-gray-900  dark:text-white group border-b-2 border-gray-700 bg-non_photo_blue rounded-lg mt-24 ");
    displayUser.setAttribute("data-id",i);
    var sidebar = document.querySelector(".ollist");
*/