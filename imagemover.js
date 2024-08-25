// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Get references to the buttons and the meme image
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const memeImage = document.getElementById('memeImage');
    
    // Create an audio object
    const audio = new Audio('Satisfaction.m4a');

    // Variables to control the movement
    let moveInterval;
    let xPos = 5;
    let yPos = 5;
    let xDirection = 1;
    let yDirection = 1;

    // Function to move the meme image
    function moveMeme() {
        // Update the position
        xPos += xDirection * (Math.random() * 5 + 1);
        yPos += yDirection * (Math.random() * 5 + 1);

        // Change direction if the image hits the edge of the screen
        if (xPos <= 0) {
            xPos = 0;
            xDirection *= -1;
        } else if (xPos >= window.innerWidth - memeImage.width) {
            xPos = window.innerWidth - memeImage.width;
            xDirection *= -1;
        }

        if (yPos <= 0) {
            yPos = 0;
            yDirection *= -1;
        } else if (yPos >= window.innerHeight - memeImage.height) {
            yPos = window.innerHeight - memeImage.height;
            yDirection *= -1;
        }

        // Apply the new position
        memeImage.style.left = xPos + 'px';
        memeImage.style.top = yPos + 'px';
    }

    // Function to start moving the meme image and play audio
    function startMoving() {
    
    // Disable the start button and enable the stop button
    startButton.disabled = true;
    stopButton.disabled = false;

    // Start the movement with a random interval
    moveInterval = setInterval(moveMeme, Math.random() * 0 + 1);

    // Play the audio
    audio.play();}

    // Function to stop moving the meme image and stop audio
    function stopMoving() {
    
    // Disable the stop button and enable the start button
    stopButton.disabled = true;
    startButton.disabled = false;

    // Stop the movement
    clearInterval(moveInterval);

    // Pause the audio
    audio.pause();
   }

    // Attach the functions to the buttons
    startButton.addEventListener('click', startMoving);
    stopButton.addEventListener('click', stopMoving);

    // Change direction at random intervals to create a randomized zigzag pattern
    setInterval(() => {
    xDirection *= -20;
    yDirection *= -20;
}, Math.random() * 33000 + 15300);
});
