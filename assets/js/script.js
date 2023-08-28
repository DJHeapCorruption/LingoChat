
var myUser = {
    username: "",
    knownLang: "",
    learnLang: ""
}


function UserCreation (){
    if (localStorage.getItem("LingoChatUser")){
        myUser = JSON.parse(localStorage.getItem("LingoChatUser"));
    } else {
        $("#exampleModal").modal("show");
    }
}

$("#userModalToggleButton").on("click", function(){
    $("#exampleModal").modal("show");
});

UserCreation();

