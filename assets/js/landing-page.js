
var myUser = {
    firstName: "",
    lastName: "",
    knownLang: "",
    targetLang: ""
}

// Pull user information from localStorage, then render the user creation modal
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

// The "Create User" button displays the user creation modal
$("#userModalToggleButton").on("click", function(){
    $("#exampleModal").modal("show");
});

// The "Submit" button collects the user information and sends it to localStorage, and then redirects the user to the homepage.
$("#submit-button").on("click",function(){
    myUser.firstName = $("#first_name").val();
    myUser.lastName = $("#last_name").val();
    myUser.knownLang = $("#known_lang").val();
    myUser.targetLang = $("#target_lang").val();
    console.log(myUser);
    localStorage.setItem("LingoChatUser",JSON.stringify(myUser));
    window.location.href = "homepage.html";
});

UserCreation();