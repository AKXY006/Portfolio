const typedTextElement = document.getElementById('typed-text');

const text = "AKSHAY KUMAR,";
let currentCharIndex = 0;

function type() {
    if (currentCharIndex < text.length) {
        // Typing the text
        typedTextElement.textContent = text.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        // Adjust typing speed for a smoother effect
        const typingSpeed = 150; // Adjust speed as desired for smoother typing
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
type();
