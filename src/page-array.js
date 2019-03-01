export default function pageArray(pokedex, pagingOptions) {
    const startIndex = (pagingOptions.page - 1) * pagingOptions.perPage;
    const endIndex = startIndex + pagingOptions.perPage;
    return pokedex.slice(startIndex, endIndex);
}
