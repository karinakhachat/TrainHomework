
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-IfrW9jtMzS26BtNEsELys2Ty68Le9pI",
    authDomain: "choochootrain-3364a.firebaseapp.com",
    databaseURL: "https://choochootrain-3364a.firebaseio.com",
    projectId: "choochootrain-3364a",
    storageBucket: "",
    messagingSenderId: "86243128591"
  };

  //console.log(config);

  firebase.initializeApp(config);

  var database = firebase.database();


  $("#add-train").on("click", function () {

    

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

    //console.log(NewTrain)

    database.ref().push(NewTrain);

    //console.log(NewTrain.name);
    //console.log(NewTrain.arrival);
    //console.log(NewTrain.firstT);
    //console.log(NewTrain.frequency);

    return false;
//emptying function
//working ^^^
    
      
    $("#name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
    

  })

    database.ref().on("child_added", function(snapshot){
      //console.log(snapshot.val())
      $(".table tbody").append("<tr><td>" + snapshot.val().name + "</td><td>" 
      + snapshot.val().arrival  + "</td><td>" + snapshot.val().frequency + "</td><td>" 
      + snapshot.val().firstT + "</td></tr>" );

    

//make time conversions with moment.js
 
    var newFrequency = 0;
    var firstTime = snapshot.val().firstT;
    var firstTimeConverted = 0;
    var minutesAway = 0;

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted)

    var diffTime = moment().diff(firstTimeConverted, "minutes");
    console.log(diffTime);

    var remaindertime = diffTime % frequencyMin;
    console.log(remaindertime)
    
    var minutesAway = frequencyMin - remaindertime;
    console.log(minutesAway)
})




