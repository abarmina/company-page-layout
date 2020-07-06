let popup = document.querySelector('.popup'),
    popupToggle = document.querySelector('.header__button--delete'),
    popupCancel = document.querySelector('.popup__answer--cancel');

popupToggle.onclick = function() {
    popup.classList.add('popup--active');
}

popupCancel.onclick = function() {
    popup.classList.remove('popup--active');
}
