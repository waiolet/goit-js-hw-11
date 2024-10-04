export function renderData(imgArr, userList) {
    const markup = imgArr.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) => {
        return `<li class="gallery-list-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="img" src="${webformatURL}" 
                        alt="${tags}" 
                        title="${tags}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${likes}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${views}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${comments}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${downloads}</p>
                        </li>
                    </ul> 
          </li>`;
    }).join("");
    userList.insertAdjacentHTML("beforeend", markup);
}