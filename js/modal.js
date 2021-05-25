const buttonMoreElems = document.querySelectorAll('.more');
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
}

buttonMoreElems.forEach(buttonMore => {
    buttonMore.addEventListener('click', openModal)
})


modal.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')){
        closeModal();
    }
})