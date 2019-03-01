const filterForm = document.getElementById('filter-form');

export default function loadFilter(callback) {

    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const formDaddy = new FormData(filterForm);
        
        const filter = {
            type: formDaddy.get('type-filter'),
            generation: formDaddy.get('generation-filter')
        };
        
        callback(filter);
    });
}