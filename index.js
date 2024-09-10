// chatbot.js

document.addEventListener('DOMContentLoaded', function() {
    // Create a container for the chatbot icon
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '20px';
    chatbotContainer.style.right = '20px';
    chatbotContainer.style.zIndex = '1000';
    chatbotContainer.style.cursor = 'pointer';

    // Create the chatbot icon
    const chatbotIcon = document.createElement('img');
    chatbotIcon.src = 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-chatbot-icon-chat-bot-robot-png-image_4841963.png'; // Updated icon URL
    chatbotIcon.alt = 'Chatbot';
    chatbotIcon.style.width = '100px'; // Adjusted size
    chatbotIcon.style.height = '100px'; // Adjusted size

    // Append the icon to the container
    chatbotContainer.appendChild(chatbotIcon);

    // Create the chatbot section (initially hidden)
    const chatbotSection = document.createElement('div');
    chatbotSection.id = 'chatbot-section';
    chatbotSection.style.position = 'fixed';
    chatbotSection.style.bottom = '20px';
    chatbotSection.style.right = '20px';
    chatbotSection.style.width = '300px'; // Adjust width as needed
    chatbotSection.style.height = '400px'; // Adjust height as needed
    chatbotSection.style.backgroundColor = '#fff'; // Background color of the chatbot
    chatbotSection.style.border = '1px solid #ccc'; // Border style
    chatbotSection.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Shadow for depth
    chatbotSection.style.display = 'none'; // Hide initially
    chatbotSection.style.zIndex = '1000'; // Ensure it's on top

    // Create a close button for the chatbot section
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = '#f00';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';

    // Append the close button to the chatbot section
    chatbotSection.appendChild(closeButton);

    // Create the chatbot content area
    const chatbotContent = document.createElement('div');
    chatbotContent.id = 'chatbot-content';
    chatbotContent.style.padding = '10px'; // Add some padding
    chatbotContent.style.overflowY = 'scroll'; // Scroll if content overflows
    chatbotSection.appendChild(chatbotContent);

    // Create a form for sending data
    const chatForm = document.createElement('form');
    chatForm.id = 'chat-form';
    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.id = 'chat-input';
    chatInput.placeholder = 'Type a message...';
    chatInput.style.width = '100%'; // Full width
    chatInput.style.padding = '10px'; // Add some padding

    const chatSubmit = document.createElement('button');
    chatSubmit.type = 'submit';
    chatSubmit.innerText = 'Send';
    chatSubmit.style.backgroundColor = '#007bff';
    chatSubmit.style.color = '#fff';
    chatSubmit.style.border = 'none';
    chatSubmit.style.borderRadius = '5px';
    chatSubmit.style.padding = '10px';

    chatForm.appendChild(chatInput);
    chatForm.appendChild(chatSubmit);
    chatbotSection.appendChild(chatForm);

    // Append the chatbot section and icon to the body
    document.body.appendChild(chatbotSection);
    document.body.appendChild(chatbotContainer);

    // Toggle the chatbot section visibility on icon click
    chatbotContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up to document
        const section = document.getElementById('chatbot-section');
        section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
    });

    // Close the chatbot section on close button click
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up to document
        chatbotSection.style.display = 'none';
    });

    // Handle form submission
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            // Append the message to the chatbot content
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.style.padding = '5px';
            chatbotContent.appendChild(messageElement);
            chatInput.value = ''; // Clear input after sending
        }
    });

    // Close chatbot section when clicking outside of it
    document.addEventListener('click', function(event) {
        const chatbotSection = document.getElementById('chatbot-section');
        const chatbotContainer = document.getElementById('chatbot-container');
        
        if (chatbotSection.style.display === 'block' &&
            !chatbotSection.contains(event.target) &&
            !chatbotContainer.contains(event.target)) {
            chatbotSection.style.display = 'none';
        }
    });
});
