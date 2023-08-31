
var myUser = {
    firstName: "",
    lastName: "",
    knownLang: "",
    targetLang: ""
}

//Render
function UserCreation (){
    if (localStorage.getItem("LingoChatUser")){
        myUser = JSON.parse(localStorage.getItem("LingoChatUser"));
        console.log(myUser);
        $("#first_name").val(myUser.firstName);
        $("#last_name").val(myUser.lastName);
        $("#known_lang").val(myUser.knownLang);
        $("#target_lang").val(myUser.targetLang);
    }
    $("#exampleModal").modal("show");
}

$("#userModalToggleButton").on("click", function(){
    $("#exampleModal").modal("show");
});

$("#submit-button").on("click",function(){
    myUser.firstName = $("#first_name").val();
    myUser.lastName = $("#last_name").val();
    myUser.knownLang = $("#known_lang").val();
    myUser.targetLang = $("#target_lang").val();
    console.log(myUser);
    localStorage.setItem("LingoChatUser",JSON.stringify(myUser));
    $("#exampleModal").modal("hide");
});

UserCreation();