// JavaScript to play sound when button is clicked
document.getElementById('play-sound-button').addEventListener('click', function() {
    const audio = new Audio('sound.mp3'); // Replace 'sound.mp3' with your sound file path
    audio.play();
});

// Add event listeners to all buttons with the class `sound-button`
document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        const audio = new Audio(soundFile);
        audio.play();
    });
});