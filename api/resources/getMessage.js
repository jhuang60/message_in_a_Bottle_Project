$( document ).ready(function() {

  //let num_of_messages = [];
  //num_of_messages = generateArray(num_of_messages);
  let messages_to_get = [];
  let currentNum = 0;

  console.log("hi ");
  $.ajax("http://localhost:3000/messages", {
  type : "GET",
  success: result => {
  //get object
    let obj = JSON.parse(JSON.stringify(result));
    let num_of_Obj = obj.count;
    let sortedList = [];

    for(let i = 0;i<num_of_Obj ; i++){
        let numGenrated = Math.floor(Math.random()*num_of_Obj);
        if(sortedList.indexOf(numGenrated) == -1){
            sortedList.push(numGenrated);
        }
        else
         i--;
    }
    console.log("in messages_to_get is " + sortedList);

    messages_to_get = sortedList;
  },
  error : error => {
      console.log("error", error);
  }
  });

  //onclick to get a message
  $("#get_a_Message").on("click",function(e){
      e.preventDefault();
      if(currentNum < messages_to_get.length){
        currentNum = get_a_Message(messages_to_get, currentNum);
        console.log("new num is " + currentNum);
        console.log("out messages_to_get is " + messages_to_get);
      } else {
        alert("you've opened all bottles possible");
      }

  });

});

//function to randoly get a message
function get_a_Message(messages_to_get, currentNum){
    //ajax get request for all messages
    console.log("hi there");
    $.ajax("http://localhost:3000/messages", {
    type : "GET",
    asyn: false,
    success: result => {
    //get object

      let obj = JSON.parse(JSON.stringify(result));
      let num = obj.count;
      let numused = currentNum - 1;
      console.log("new new num is ", numused);
      document.getElementById("the_Message").innerHTML +=
      "<p class='mb-1'>" + obj.messages[numused].message.anonymousName + "</p>" +
      "<p class='mb-1'>" + obj.messages[numused].message.message + "</p>" ;

    },
    error : error => {
        console.log("error", error);
    }
    });

    currentNum += 1;

    return currentNum;
}
