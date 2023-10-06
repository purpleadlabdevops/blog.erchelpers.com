if(document.querySelector('[data-modal]')){
  document.querySelector('[data-modal]').addEventListener('click', e => {
    e.preventDefault()
    const modalID = e.target.dataset.modal
    document.querySelector(`#modal__${e.target.dataset.modal}`).classList.add('modal__active')
  })
  document.querySelector('.modal__close').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('.modal').classList.remove('modal__active')
  })
}

const boxDates = document.querySelectorAll('[data-date]'),
      curDate = new Date(),
      newDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() - 4),
      month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
boxDates.forEach(item => {
  item.innerHTML = `${ newDate.getDate() } ${ month[newDate.getMonth()] }, ${ newDate.getFullYear() }`
})

setTimeout(()=>{
  const hrefs = document.querySelectorAll('[href]')
  hrefs.forEach(link => {
    const linkStr = link.href
    if(linkStr.includes('&app_id=undefined')){
      link.href = linkStr.replace('&app_id=undefined','');
    }
  })
}, 3000);