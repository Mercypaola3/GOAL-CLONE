const searchBar = document.getElementById('searchBar');
const searchInput = searchBar.querySelector('input');
const closeBtn = searchBar.querySelector('button');

// 1. Listen for typing events
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    console.log("Searching for:", query);
    // Add your live-search filtering logic here
});

// 2. Close search bar when clicking the "X" button
closeBtn.addEventListener('click', () => {
    searchBar.classList.add('hidden');
    searchInput.value = ''; // Clear input on close
});