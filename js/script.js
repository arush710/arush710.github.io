// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const interactiveBtn = document.getElementById('interactive-btn');

    if (interactiveBtn) {
        interactiveBtn.addEventListener('click', () => {
            // Simple interactive action placeholder
            alert('Hello! Your GitHub-hosted script is working perfectly.');
            console.log('Interaction logged successfully.');
        });
    }
});
