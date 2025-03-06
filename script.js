chat.scrollTo({
  top: chat.scrollHeight,
  behavior: "smooth"
});

// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
  } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
  } else if (input.includes("what is your name")) {
    output = "My name is Jarvis, I'm a chatbot.";
  } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
  } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
  } else if (input.includes("thank you")) {
      output = "You're welcome!";
  } else if (input.includes("bye")) {
      output = "Goodbye! Have a great day!";
  } else {
      output = "Sorry, I don't understand that. Please try something else.";
  }
  return output;
}
function getCurrentTime() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}
  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = `${message} <span class="timestamp">${getCurrentTime()}</span>`;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = `${message} <span class="timestamp">${getCurrentTime()}</span>`;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  //Add a error handling
  function sendMessage() {
    let input = document.getElementById("input").value.trim();
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    } else {
        alert("Please enter a message.");
    }
}

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });

  // Save chat history
function saveChat() {
  let chat = document.getElementById("chat").innerHTML;
  localStorage.setItem("chatHistory", chat);
}

// Load chat history
function loadChat() {
  let chat = localStorage.getItem("chatHistory");
  if (chat) {
      document.getElementById("chat").innerHTML = chat;
  }
}

// Call loadChat on page load
window.onload = loadChat;

// Call saveChat after sending a message
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
          displayBotMessage(output);
          saveChat();
      }, 1000);
      document.getElementById("input").value = "";
  }
}

