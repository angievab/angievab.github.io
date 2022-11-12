const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

// When the code new WebSocket(URL) runs, it 
// creates an instance of a WebSocket object 
// and tries to connect to the URL. When this 
// is successful, it fires an event called 'open'.
//  This is one of a number of events that a
//   WebSocket object can emit. 
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}
// First of all we stop the default behavior, 
// so the form doesn't actually get submitted. 
// Then we grab the value of the text input and 
// store it in a local variable called text. 
// We then use the output() function again to add 
// the message to the 'output'<div>, with the phrase 
// 'SENT:' at the start.

// The last line is an important one. This calls a method 
// of the connection object called send(). This sends the message to the
//  URL that the websocket is connected to. When this message is received,
//   the server will process it and send a response. The connection object 
//   waits for the response, and when it receives one, a 'message' event 
//   is fired. The 'echo.websocket.org' server simply responds with the 
//   same message, but any message could be processed in a variety of ways before sending a response.
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);