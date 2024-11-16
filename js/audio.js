let hasInteracted = false;

const startMusic = async (event) => {
    if (hasInteracted) return;
    hasInteracted = true;
    
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;
    
    try {
        await audio.play();
        // Remove listeners only if play succeeds
        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
        document.removeEventListener('scroll', startMusic);
    } catch (error) {
        console.log('Waiting for valid user interaction');
        hasInteracted = false;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set volume to 30%
    
    let isPlaying = false;
    
    // Function to handle music playback
    function handleMusic() {
        if (!isPlaying) {
            bgMusic.play()
                .then(() => {
                    isPlaying = true;
                })
                .catch(error => {
                    console.log('Playback failed:', error);
                });
        }
    }
    
    // Add event listeners for user interaction
    const interactionEvents = ['click', 'touchstart', 'scroll'];
    interactionEvents.forEach(event => {
        document.addEventListener(event, handleMusic, { once: true });
    });
    
    // Handle music pause/play when tab visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            bgMusic.pause();
        } else if (isPlaying) {
            bgMusic.play();
        }
    });
});
