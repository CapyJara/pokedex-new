const filterForm = document.getElementById('filter-form');
const sortChoice = document.getElementById('sort-select');

export default function loadSort(callback) {
    
    filterForm.addEventListener('submit', () => {
        const selectedSort = {
            property: sortChoice.value
        };
        callback(selectedSort);
    });
}