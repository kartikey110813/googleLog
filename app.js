function loginMe() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result){
    console.log(result);
    
    console.log("successfull login");

  }).catch(function(error){

    console.log(error);
    console.log("failed To login");
  })

}
