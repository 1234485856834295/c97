document.getElementById("welcomesign").innerHTML="Welcome "+localStorage.getItem("pname");
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAYK9cTrumgMz7x8q7D-G-5o9tIwXYJBEM",
      authDomain: "p94p2-3eb79.firebaseapp.com",
      databaseURL: "https://p94p2-3eb79-default-rtdb.firebaseio.com",
      projectId: "p94p2-3eb79",
      storageBucket: "p94p2-3eb79.appspot.com",
      messagingSenderId: "425706330009",
      appId: "1:425706330009:web:05e8067085a7b06507a508"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function add_room(){
room=document.getElementById("room_name").value;
firebase.database().ref("/").child(room).update({purpose:" room name "});
localStorage.setItem("room",room);
window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room",name);
      window.location="kwitter_page.html";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("room");
localStorage.removeItem("pname");
}
