const panels = document.querySelectorAll('.panel') //div'in içerisinde birden fazla panel var ve hepsine ihtiyacın var bunları düğüm listesine kaydeder - NodeList
//console.log(panels)
panels.forEach(pnl => {
    pnl.addEventListener('click', () => {
        removeActiveClasses()
        pnl.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(pnl => {
        pnl.classList.remove('active')
    })
}