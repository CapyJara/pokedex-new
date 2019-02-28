const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 25;

export default function loadPaging(totalCount) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);

    totalPages.textContent = totalPageCount;
    let currentPageNumber = 1;
    currentPage.textContent = currentPageNumber;
    previousButton.disabled = currentPageNumber === 1;

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        currentPage.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        console.log(pagingOptions);

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        currentPage.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        console.log(pagingOptions);

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    });

}