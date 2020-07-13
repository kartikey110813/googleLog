function loginMe() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result){
    console.log(result);
    
    console.log("successfull login");

    alert("your login is successfull , your data has been captured in firebase database");

  }).catch(function(error){

    console.log(error);
    console.log("failed To login");
  })

}
