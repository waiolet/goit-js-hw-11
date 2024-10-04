export function fetchData(inputSearch) {
    const searchParams = new URLSearchParams({
        key: "46332021-f156325159d295bd8ceb1a335",
        q: `${inputSearch}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    return fetch(
        `https://pixabay.com/api/?${searchParams}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }); 
}