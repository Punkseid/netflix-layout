const content_seta = document.querySelector('#content-seta')
const closeNavSeta = document.querySelector('#closeNavSeta')

onMouseOver = () => {
    content_seta.style.display = 'flex'
}

onMouseLeave = () => {
    content_seta.style.display = 'none'
}

content_seta.addEventListener('click', () => {
    content_seta.style.display = 'none'
})

closeNavSeta.addEventListener('click', () => {
    content_seta.style.display = 'none'
    closeNavSeta.style.cursor = 'pointer'
})