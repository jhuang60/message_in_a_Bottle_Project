# Message in a Bottle Project

## Project summary

Message in a bottle is a web application that allows user to anonymously post a message and also messages from other anonymous users. This application takes an anonymous name and a message as user input. When a user clicks get a message, a non-repeated random message will be returned. The messages are retrieved from mongodb and sorted randomly into an array and then displayed according to the order of the randomized array. Users will receive an alert if there are no messages in the database and also an alert if the user has read all messages available in the database.

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

In your terminal, run <i>**npm test**</i>

## Design and architecture

### Architecture

This application is developed in RESTful API structure. In the serve side, a get request to get all messages from the database and a post request is developed post new messages to the database. The server side is mainly developed using node.js and express. The Client side of the application mainly uses jquery and ajax to handle user input. For database, MongoDB Atlas database service is used to store user input.

![Untitled_Artwork 2](https://user-images.githubusercontent.com/25678885/117103363-dc918000-ad3f-11eb-9b26-66ee77a93cc0.jpg)

### User flow diagram

Users only have two decisions to make when using this web application. If the user wants to get a message, the user can press a button and it will return the user a message from an array of messages. If the user decides to post a message instead, the user can navigate to the post message page and input an anonymous name and a message.

![userflow](https://user-images.githubusercontent.com/25678885/117103534-237f7580-ad40-11eb-93a0-f8538325a04e.png)

### Prototype

#### Main page

![pic1](https://user-images.githubusercontent.com/25678885/117103475-0d71b500-ad40-11eb-81c4-802c39fad6a4.jpg)
Main page: User is able to click get a message or use the menu to navigate to post message page.

![pic2](https://user-images.githubusercontent.com/25678885/117103485-12366900-ad40-11eb-8f87-c62f0b3b6f1f.png)
Get message: After user clicks the button, a randomized message is displayed.

#### Post message page

![pic3](https://user-images.githubusercontent.com/25678885/117103506-1793b380-ad40-11eb-81af-bb9586a15a0e.png)
Post message page: User is able to input an anonymous name and a message

![pic4](https://user-images.githubusercontent.com/25678885/117103514-1bbfd100-ad40-11eb-805d-735e91c8c3a1.png)
Alert user: After the user successfully submits the message, it will display an alert.

## Test 


## Expected Results



## Errors
