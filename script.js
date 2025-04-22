document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const greetingMessage = document.getElementById('greetingMessage');
    
    // Submit button click handler
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            greetingMessage.innerHTML = `Hello ${name}! Have a good day :)`;
            greetingMessage.style.display = 'block';
        } else {
            greetingMessage.innerHTML = 'Please enter your name first.';
            greetingMessage.style.display = 'block';
        }
    });
    
    // Reset button click handler
    resetBtn.addEventListener('click', function() {
        nameInput.value = '';
        greetingMessage.innerHTML = '';
        greetingMessage.style.display = 'none';
    });
});
