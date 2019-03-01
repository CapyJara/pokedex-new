const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
// const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const pageTo = document.getElementById('page-to');

const PER_PAGE = 15;

export default function loadPaging(totalCount, callback) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);

    totalPages.textContent = totalPageCount;
    let currentPageNumber = 1;
    pageTo.placeholder = 1;
    
    updatePaging();
    
    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        pageTo.placeholder++;
        pageTo.value = '';
        pageTo.placeholder = currentPageNumber;
        updatePaging();
    });
    
    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        pageTo.placeholder--;
        pageTo.value = '';
        pageTo.placeholder = currentPageNumber;
        updatePaging();
    });
    
    pageTo.addEventListener('change', event => {
        event.preventDefault();
        currentPageNumber = pageTo.value;
        updatePaging();
    });
    
    
    function updatePaging() {
        pageTo.placeholder = currentPageNumber;
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        callback(pagingOptions);
    }
}