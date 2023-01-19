
const arrowSelected = document.querySelectorAll('.arrow') 

arrowSelected.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const textActivated = document.querySelector('.active')
        textActivated.classList.remove('active')

        const idArrowSelected = arrow.attributes.id.value

        const TextToActivate = document.getElementById('text-' + idArrowSelected)
        TextToActivate.classList.add('active')

        const arrowActivated = document.querySelector('.open')
        arrowActivated.classList.remove('open')

        const arrowSelected = document.getElementById(idArrowSelected)
        arrowSelected.classList.add('open')
    })
})