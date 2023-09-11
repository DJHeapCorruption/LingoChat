L.control.maptilerGeocoding({ apiKey: key }).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([35.784908, -78.647333], {draggable: true}).addTo(map);
var listLength = 2;


    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick)
    map.on('click', nearbyPeople);
    
    function nearbyPeople(event) {
        var sidebar = document.querySelector(".ollist");
        $(".ollist").empty();

        var tempList = stockUsers;
        
            

        for (var i = 0; i < listLength; i++) {
            var displayUser = document.createElement("li");
            var index = Math.floor(Math.random()*tempList.length);
                
            displayUser.innerHTML = tempList[index].name;
            displayUser.setAttribute("class","user-button active:bg-non_photo_blue-300 cursor-pointer text-center items-center p-2 text-gray-900  dark:text-white group border-b-2 border-gray-700 bg-non_photo_blue rounded-lg mt-24 ");
            displayUser.setAttribute("data-id", ""+index);
            tempList.splice(index,1);
            sidebar.appendChild(displayUser);
            
        }
        $(".user-button").on("click", enterChat);
        
    }

    function enterChat(event){
        
        var chosenUser = event.target.dataset.id;
        console.log(event.target.dataset.id);
        localStorage.setItem("userIndexLS", chosenUser);
        document.location.href= "chat-box.html";
    }
    

    var stockUsers = [
        {
            name: "John Doe",
            age: "34",
            targetLanguage: "Spanish",
            hobbies: ["playing basketball", "programming"],
        },
        {
            name: "Juan Nadie",
            age: "27",
            targetLanguage: "Spanish",
            hobbies: ["jigsaw puzzles", "reading"],
        },
        {
            name: "Monsieur X",
            age: "22",
            targetLanguage: "Spanish",
            hobbies: ["reading", "fishing"],
        },
        {
            name: "Max Mustermann",
            age: "19",
            targetLanguage: "Spanish",
            hobbies: ["ice skating", "cooking"],
        }
    ]
   var i=0
    

    var onClick = function(e) {
        marker.on('drag', onDrag);
    };
    var onDrag = function (e) {
        var latlng = marker.getLatLng();
        document.getElementById('outlat').innerHTML = latlng.lat;
        document.getElementById('outlon').innerHTML = latlng.lng;
    };



    
  