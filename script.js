// Update current date
function updateDate() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    document.querySelector('.date h2').textContent = now.getDate();
    document.querySelector('.date-details').innerHTML = `
        <p class="day">${days[now.getDay()]},</p>
        <p>${months[now.getMonth()]}</p>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    
    // Add click handlers for buttons
    document.querySelector('.tasks-button').addEventListener('click', () => {
        alert('Tasks feature coming soon!');
    });
    
    document.querySelector('.voice-button').addEventListener('click', () => {
        alert('Voice assistant feature coming soon!');
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(`Searching for: ${searchInput.value}`);
    }
});
