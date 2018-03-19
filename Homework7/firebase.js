$(document).ready(function (){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-IfrW9jtMzS26BtNEsELys2Ty68Le9pI",
    authDomain: "choochootrain-3364a.firebaseapp.com",
    databaseURL: "https://choochootrain-3364a.firebaseio.com",
    projectId: "choochootrain-3364a",
    storageBucket: "",
    messagingSenderId: "86243128591"
  };
  
  console.log(config);

  firebase.initializeApp(config);
      
 $("#add-train").on("click", function() {

  var database = firebase.database();

  var trainName = $("#name-input").val();
  var destination = $("#role-input").val();
  var firstTrain = $("#start-input").val();
  var frequencyMin = $("#rate-input").val();


//adding the train info function 
   


    var NewTrain = {
      name: trainName,
      arrival: destination,
      firstT: firstTrain,
      frequency: frequencyMin
  };

  console.log(NewTrain)

  database.ref().push(NewTrain);

  console.log(NewTrain.name);
  console.log(NewTrain.arrival);
  console.log(NewTrain.firstT);
  console.log(NewTrain.frequency);



})
})