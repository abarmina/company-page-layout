const popup = document.getElementById('j-popup'),
    popupDeleteButton = document.getElementById('j-delete-button'),
    popupCancelButton = document.getElementById('j-cancel-button');

popupDeleteButton.addEventListener('click', () => {
    popup.classList.add('j-active');
});

popupCancelButton.addEventListener('click', () => {
    popup.classList.remove('j-active');
})
