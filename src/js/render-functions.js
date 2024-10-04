export function renderData(imgArr, userList) {
    if (!Array.isArray(imgArr) || imgArr.length === 0) {
        console.warn('No images to render.');
        return; 
    }

    const fragment = document.createDocumentFragment();

    imgArr.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        const listItem = document.createElement('li');
        listItem.className = 'gallery-list-item';

        listItem.innerHTML = `
            <a class="gallery-link" href="${largeImageURL}" aria-label="${tags}">
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
        `;

        fragment.appendChild(listItem);
    });

    userList.appendChild(fragment);
}

export function showLoader(loaderIndicator) {
  loaderIndicator.classList.remove('hidden');
  loaderIndicator.style.display = 'block';
}

export function hideLoader(loaderIndicator) {
  loaderIndicator.classList.add('hidden');
  loaderIndicator.style.display = 'none';
}
