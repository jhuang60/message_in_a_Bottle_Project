$( document ).ready(function() {

  let messages_to_get = [];
  let currentNum = 0;

  // get all messages from mongodb and sort them in a random order
  $.ajax("https://bottle-message-app.herokuapp.com/messages", {
  type : "GET",
  success: result => {

    let obj = JSON.parse(JSON.stringify(result));
    let num_of_Obj = obj.count;
    let sortedList = [];

    //for loop to sort messages
    for(let i = 0;i<num_of_Obj ; i++){
        let numGenrated = Math.floor(Math.random()*num_of_Obj);
        if(sortedList.indexOf(numGenrated) == -1){
            sortedList.push(numGenrated);

        }
        else
         i--;

    }
    //save the sorted array to messages_to_get
    messages_to_get = sortedList;
  },
  error : error => {
      console.log("error", error);
  }
  });

  //onclick to get a message
  $("#get_a_Message").on("click",function(e){
      e.preventDefault();
      //check if currentNum is less than messages_to_get. If it is false
      //it means that there are no messages for you to read (either you read all messages
      // or there are no messages)
      if(currentNum < messages_to_get.length){
        currentNum = get_a_Message(messages_to_get, currentNum);
      } else {
        alert("There are no message bottles to open");
      }
  });

});

//function to display a message
function get_a_Message(messages_to_get, currentNum){
    //ajax get request for all messages
    console.log("hi there");
    $.ajax("https://bottle-message-app.herokuapp.com/messages", {
    type : "GET",
    asyn: false,
    success: result => {
    //get message objects

      let obj = JSON.parse(JSON.stringify(result));
      let numused = currentNum - 1;
      let randomMessage = messages_to_get[numused];

      //display messages according to the array messages_to_get
      document.getElementById("the_Message").innerHTML =
      "<p class='mb-1'>" + "From: "+ obj.messages[randomMessage].message.anonymousName + "</p>" +
      "<p class='mb-1'>" + "Message: " + obj.messages[randomMessage].message.message + "</p>" ;

    },
    error : error => {
        console.log("error", error);
    }
    });

    currentNum += 1;

    return currentNum;
}
