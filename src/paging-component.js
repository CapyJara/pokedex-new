const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 25;

export default function loadPaging(totalCount) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);

    totalPages.textContent = totalPageCount;
    let currentPageNumber = 1;
    
    updatePaging();
    
    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });
    
    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });
    
    
    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    }
}