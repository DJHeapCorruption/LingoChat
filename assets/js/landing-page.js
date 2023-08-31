var stockUsers = [
    {
        name: "Maria",
        age: "34",
        hobbies: ["playing basketball", "programming"],
    },
    {
        name: "Dave",
        age: "27",
        hobbies: ["jigsaw puzzles", "reading"],
    }
]



var myUser = {
    firstName: "",
    lastName: "",
    knownLang: "",
    targetLang: ""
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

$("#submit-button").on("click",function(){
    myUser.firstName = $("#first_name").val();
    myUser.lastName = $("#last_name").val();
    myUser.knownLang = $("#known_lang").val();
    myUser.targetLang = $("#target_lang").val();
    $("#exampleModal").modal("hide");
    console.log(myUser);
});

UserCreation();