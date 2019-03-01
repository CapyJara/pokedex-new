const sortChoice = document.getElementById('sort-select');

export default function loadSort(callback) {
    
    sortChoice.addEventListener('change', () => {
        const selectedSort = {
            property: sortChoice.value
        };
        callback(selectedSort);
    });
}