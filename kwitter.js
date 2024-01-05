function login(){
    user_name=document.getElementById("player_name").value;
    localStorage.setItem("pname",user_name);
    window.location="kwitter_room.html";
}