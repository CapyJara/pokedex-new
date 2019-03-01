const filterForm = document.getElementById('filter-form');

export default function loadFilter(callback) {

    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const formDaddy = new FormData(filterForm);
        
        const filter = {
            type_1: formDaddy.get('type-filter'),
        };
        
        callback(filter);
    });
}