# Message in a Bottle Project

### Deployed heroku url: https://bottle-message-app.herokuapp.com/

## Project summary

Message in a bottle is a web application that allows user to anonymously post a message and also receive messages from other anonymous users. This application takes an anonymous name and a message as user input. When a user clicks get a message, a non-repeated random message will be returned. The messages are retrieved from mongodb and sorted randomly into an array and then displayed according to the order of the randomized array. Users will receive an alert if there are no messages in the database and also an alert if the user has read all messages available in the database.

## How to set up and run project

### Set up

1. Download the project
2. If you don't have node.js, visit https://nodejs.org/en/download/ and install node.js according to your system
3. If you don't have npm, follow the instructions on https://www.npmjs.com/get-npm to intall npm
4. In your terminal, navigate to the directory where the project files are located
5. In your terminal, run <i>**npm install**</i>

### To run project

In your terminal, run <i>**npm start**</i>

### To run test

1. There is a test that is not passed, uncomment line 57 and 69 by removing <i> /* */ </i> if you wish to run that test. The file location is <i>**./test/message.test.js**</i>

2. In your terminal, run <i>**npm test**</i>

## Design and architecture

### Architecture

This application is developed in RESTful API structure. In the serve side, a get request to get all messages from the database and a post request is developed post new messages to the database. The server side is mainly developed using node.js and express. The Client side of the application mainly uses jquery and ajax to handle user input. For database, MongoDB Atlas database service is used to store user input.

![architecture](https://user-images.githubusercontent.com/25678885/117210249-0937ad00-adbd-11eb-8655-e96cc1429489.jpg)

### User flow diagram

Users only have two decisions to make when using this web application. If the user wants to get a message, the user can press a button and it will return the user a message from an array of messages. If the user decides to post a message instead, the user can navigate to the post message page and input an anonymous name and a message.

![userflow](https://user-images.githubusercontent.com/25678885/117103534-237f7580-ad40-11eb-93a0-f8538325a04e.png)

### Prototype

#### Main page

Main page: User is able to click get a message or use the menu to navigate to post message page.
![pic1](https://user-images.githubusercontent.com/25678885/117103475-0d71b500-ad40-11eb-81c4-802c39fad6a4.jpg)

Get message: After user clicks the button, a randomized message is displayed.
![pic2](https://user-images.githubusercontent.com/25678885/117103485-12366900-ad40-11eb-8f87-c62f0b3b6f1f.png)

#### Post message page

Post message page: User is able to input an anonymous name and a message
![pic3](https://user-images.githubusercontent.com/25678885/117103506-1793b380-ad40-11eb-81af-bb9586a15a0e.png)

Alert user: After the user successfully submits the message, it will display an alert.
![pic4](https://user-images.githubusercontent.com/25678885/117103514-1bbfd100-ad40-11eb-805d-735e91c8c3a1.png)

## Expected Results

Display main page:
<img width="1254" alt="Screen Shot 2021-05-05 at 3 14 54 PM" src="https://user-images.githubusercontent.com/25678885/117204701-477d9e00-adb6-11eb-9579-c0e52ae76d73.png">

Display result based on a sorted list of messages from the database:
<img width="1280" alt="Screen Shot 2021-05-05 at 3 30 24 PM" src="https://user-images.githubusercontent.com/25678885/117205280-0afe7200-adb7-11eb-87f7-ff29e2c354e1.png">

Console output for the sorted list: In this case, message 5 and 0 was displayed.  
<img width="493" alt="Screen Shot 2021-05-05 at 3 30 10 PM" src="https://user-images.githubusercontent.com/25678885/117205339-1e114200-adb7-11eb-874c-fc278bad6fd7.png">

Location of message 5 and 0 on the database:

<img width="707" alt="Screen Shot 2021-05-05 at 3 31 22 PM" src="https://user-images.githubusercontent.com/25678885/117205678-8e1fc800-adb7-11eb-870b-783b69796da7.png">

<img width="716" alt="Screen Shot 2021-05-05 at 3 31 30 PM" src="https://user-images.githubusercontent.com/25678885/117205690-924be580-adb7-11eb-8a24-843097787f25.png">

Alert the user if the user saw every message or if the database is empty:
<img width="1280" alt="Screen Shot 2021-05-05 at 4 23 23 PM" src="https://user-images.githubusercontent.com/25678885/117211154-43ee1500-adbe-11eb-82af-569a777ea895.png">

Post message page:
<img width="1254" alt="Screen Shot 2021-05-05 at 3 15 58 PM" src="https://user-images.githubusercontent.com/25678885/117210758-bb6f7480-adbd-11eb-9fe7-28e67cccdac5.png">

Alert the user if the message was successfully posted or it didn't:
<img width="1255" alt="Screen Shot 2021-05-05 at 3 16 07 PM" src="https://user-images.githubusercontent.com/25678885/117210788-c4604600-adbd-11eb-8937-7117a37f4310.png">

## Test

<img width="955" alt="Screen Shot 2021-05-05 at 1 31 10 PM" src="https://user-images.githubusercontent.com/25678885/117204306-c3c3b180-adb5-11eb-8268-bb3972f98870.png">

Test the index page for components. This makes sure that all front end components are in place and not mistakenly modified and the page returns 200 OK success status response. The test was passes successfully.

<img width="915" alt="Screen Shot 2021-05-05 at 1 31 17 PM" src="https://user-images.githubusercontent.com/25678885/117204357-d3db9100-adb5-11eb-91c9-3c97c06c9cb6.png">

Test the post page for components. This makes sure that all front end components are in place and not mistakenly modified and the page returns 200 OK success status response. The test was passes successfully.

<img width="685" alt="Screen Shot 2021-05-05 at 1 31 23 PM" src="https://user-images.githubusercontent.com/25678885/117204378-d9d17200-adb5-11eb-90fd-c18d36deef79.png"> The test was passes successfully.

Test the index page for get requests. This makes sure the get request returns an object and the page returns 200 OK success status response.

<img width="1070" alt="Screen Shot 2021-05-05 at 1 31 38 PM" src="https://user-images.githubusercontent.com/25678885/117204414-e35ada00-adb5-11eb-859c-76b53623586e.png"> 

Test the post page for post requests. This inserts two inputs and makes sure that it returns a 201 status response, an _id, and makes sure that it is an object. The test was not passed successfully (Check error section for more details).

## Errors

The test for post request did not pass succeddfully and displayed the following message:

<img width="978" alt="Screen Shot 2021-05-05 at 3 37 58 PM" src="https://user-images.githubusercontent.com/25678885/117205982-e951ba80-adb7-11eb-9d8d-3e9fb54e01a3.png">

This error might be caused because there is no value being passes and according to the model schema, anonymous name and message are required fields. As you can see in the following postman output:

<img width="853" alt="Screen Shot 2021-05-05 at 3 42 28 PM" src="https://user-images.githubusercontent.com/25678885/117206505-93c9dd80-adb8-11eb-9c47-a6c3a28ce757.png">

If required is removed from the data schema, postman would successfully post the message; however, the test would still not pass and the form might allow users to submit empty data.
<img width="535" alt="Screen Shot 2021-05-05 at 3 45 27 PM" src="https://user-images.githubusercontent.com/25678885/117206970-10f55280-adb9-11eb-8fc4-863e288a165d.png">

<img width="852" alt="Screen Shot 2021-05-05 at 3 44 51 PM" src="https://user-images.githubusercontent.com/25678885/117206954-0dfa6200-adb9-11eb-997f-177518525be1.png">

Changing the post request from req.body to req.query would allow postman to post a message but the front-end would not work

<img width="439" alt="Screen Shot 2021-05-05 at 3 52 17 PM" src="https://user-images.githubusercontent.com/25678885/117207774-f53e7c00-adb9-11eb-9116-e7eebdd4b824.png">

Another possible reason why post was not working could be not having middlewares, however, I did have middlewares registered. Thus, until now no possible solution was found to fix this error.
