document.querySelector('[data-modal]').addEventListener('click', e => {
  e.preventDefault()
  const modalID = e.target.dataset.modal
  document.querySelector(`#modal__${e.target.dataset.modal}`).classList.add('modal__active')
})
document.querySelector('.modal__close').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('.modal').classList.remove('modal__active')
})