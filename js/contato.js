document.getElementById('send-button').addEventListener('click', function() {
    var message = document.getElementById('message-input').value;
    var outputDiv = document.getElementById('output');
    
    var square = document.createElement('div');
    square.classList.add('square');
    
    var text = document.createElement('span');
    text.textContent = message;
    
    document.getElementById('message-input').classList.add('fixed');
    
    square.appendChild(text);
    
    outputDiv.appendChild(square);
    
    document.getElementById('message-input').value = '';

    
  });