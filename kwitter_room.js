
const firebaseConfig = {
      apiKey: "AIzaSyASKWzpOP3yUrEYT6oY4efBbRBHi4Wn_Fw",
      authDomain: "kwitter-app-9eccd.firebaseapp.com",
      databaseURL: "https://kwitter-app-9eccd-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9eccd",
      storageBucket: "kwitter-app-9eccd.appspot.com",
      messagingSenderId: "803792518938",
      appId: "1:803792518938:web:876ae465a975224a1eb6a3"
    };
   firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!"

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}