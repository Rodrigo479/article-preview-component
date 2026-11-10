const shareButton = document.getElementById("main__article-share-button");
const authorElem = document.getElementById("main__article-author");
const elementsArray = authorElem.querySelectorAll('[data-toggle]');

shareButton.addEventListener('click', () => {
    for (elem of elementsArray) {
        if (elem.getAttribute('data-toggle') === 'show') {
            elem.setAttribute('data-toggle', 'hide');
        }
        else {
            elem.setAttribute('data-toggle', 'show');
        }
    }
});