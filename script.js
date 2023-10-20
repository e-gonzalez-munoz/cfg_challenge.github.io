// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;


    // Check if dark mode is enabled
    const darkModeEnabled = body.classList.contains('dark-mode');

    // Toggle dark mode classes
    if (darkModeEnabled) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

// Check local storage for dark mode preference
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    toggleDarkMode();
}
