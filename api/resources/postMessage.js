$( document ).ready(function() {

    //onclick to post a message
    $("#submitMessageBtn").on("click",function(e){
        e.preventDefault();
        sendMessage();
    });

});

//function to send a message
function sendMessage(){
    //save user input into variables
    let anonymousName =  $('#anonymousNameInput').val();
    let message = $('#messageInput').val();

    //ajax post request for to send a message
    $.ajax("https://bottle-message-app.herokuapp.com/messages", {
        type : "POST",
        data : {    anonymousName: anonymousName,
                    message: message,
                },
        success: result => {
            console.log("success ", result);
            //clear input boxes
            document.getElementById('anonymousNameInput').value = '';
            document.getElementById('messageInput').value = '';
            alert ("Your message is successfully sent");
        },
        error : error => {
          alert ("Your message failed to send");
          console.log("error", error);
        }
    });

}
