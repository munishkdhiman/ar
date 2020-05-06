// Initialize Firebase

  var config = {
    apiKey: "AIzaSyDPbNEqq0Mix_EnvwjHHk7vdmK0Xqi4aCk",
    authDomain: "gestureresea.firebaseapp.com",
    databaseURL: "https://gestureresea.firebaseio.com",
    projectId: "gestureresea",
    storageBucket: "gestureresea.appspot.com",
    messagingSenderId: "142507868861",
    appId: "1:142507868861:web:db758d529c8b9ab7616dd4"
  };

firebase.initializeApp(config);


const dbRefStatus = firebase.database().ref().child('Status/Status');



 dbRefStatus.on("value", function(snapshot) {
	 
   if(snapshot.val()==0)
   {
	   document.getElementById("reactions").style.display = "block";
	   document.getElementById("qna").style.display = "none";
	   
   }
   if(snapshot.val()==1)
   {
	   document.getElementById("reactions").style.display = "none";
	   document.getElementById("qna").style.display = "block";
   }
   
   
  }, function (error) {
   console.log("Error: " + error.code);
 });
 



const dbReflikes = firebase.database().ref().child('Likes');



 dbReflikes.on("value", function(snapshot) {
   document.getElementById("p1").innerHTML = "Likes: "+snapshot.numChildren();
  }, function (error) {
   console.log("Error: " + error.code);
 });
 
 
 const dbRefclaps = firebase.database().ref().child('claps');



 dbRefclaps.on("value", function(snapshot) {
   document.getElementById("p2").innerHTML = "Claps: "+snapshot.numChildren();
  }, function (error) {
   console.log("Error: " + error.code);
 });
 
 const dbRefcheers = firebase.database().ref().child('cheers');



 dbRefcheers.on("value", function(snapshot) {
   document.getElementById("p3").innerHTML = "Cheers: "+snapshot.numChildren();
  }, function (error) {
   console.log("Error: " + error.code);
 });
  
  
function addLike(){
  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('Likes');
  var newStoreRef = storesRef.push();
  newStoreRef.set({
    name: "like"
  });
}  

function addClap(){
  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('claps');
  var newStoreRef = storesRef.push();
  newStoreRef.set({
    name: "like"
  });
}


function addCheers(){
  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('cheers');
  var newStoreRef = storesRef.push();
  newStoreRef.set({
    name: "like"
  });
}


function addComment(){
	
	if(document.getElementById("CommentBoxIP").value!="")
	{
  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('comments');
  var newStoreRef = storesRef.push();
  newStoreRef.set({
    name: document.getElementById("CommentBoxIP").value,
	approved: "0"
  });
  document.getElementById("CommentBoxIP").value="";
  
	}
	else
	{
		alert("Please enter the comment!");
	}
  
}



 const dbRefcomments = firebase.database().ref().child('comments');



 dbRefcomments.on("value", function(snapshot) {
	  updateComment();
 });

  
function updateComment()
{  
firebase.database().ref('comments').limitToLast(1).once('value')
.then(function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
         document.getElementById("commentLine").innerHTML = childSnapshot.val().name;
     });
});
}





const userListUI = document.getElementById("questions");

dbRefcomments.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	userListUI.append($li);

});













  
const dbRefStatusUp = firebase.database().ref().child('Status'); 
 
  
  
  
function ChangeStatus(status){
	
	dbRefStatusUp.set({
    Status: status
  });
	
}
