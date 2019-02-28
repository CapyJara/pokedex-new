export default function pageArray(pages, pagingOptions) {
    const startIndex = (pagingOptions.page - 1) * pagingOptions.perPage;
    const endIndex = startIndex + pagingOptions.perPage;
    return pages.slice(startIndex, endIndex);
}
