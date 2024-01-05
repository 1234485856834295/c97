//YOUR FIREBASE LINKS

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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
username=message_data['name'];
message=message_data['message'];
like=message_data['like'];
line1="<h4> "+username+"<img class='user_tick' src='tick.png></h4>'";
line2="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
line3="<span class=' glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=line1+line2+line3;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout(){
      window.location="index.html";
      localStorage.removeItem("room");
      localStorage.removeItem("pname");
}

room_name=localStorage.getItem("room");
player_name=localStorage.getItem("pname");

function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({name:player_name,message:msg,like:0});
      document.getElementById("message").value="";
}

function updateLike(message_id){
      console.log("clicked on like button - "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}