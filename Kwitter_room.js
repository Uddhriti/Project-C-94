// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkEI_gxgaNusS7N_B4WTFxvdC9-v9S7WE",
    databaseURL: "https://kwitter-277d2-default-rtdb.firebaseio.com/",
    authDomain: "project-kwitter-64ad9.firebaseapp.com",
    projectId: "project-kwitter-64ad9",
    storageBucket: "project-kwitter-64ad9.appspot.com",
    messagingSenderId: "913687044500",
    appId: "1:913687044500:web:53661ea4bff0cfab41af81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE
  username = localStorage.getItem("user_name");
  document.getElementById("name").innerHTML="Welcome : " + username ;
function getData(){
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML = row ;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");  
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
