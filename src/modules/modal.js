const modal = () => {
    const overlay = document.querySelector('.overlay')

    const headerModalContent = document.querySelector('.header-modal')
    const servicesModal = document.querySelector('.services-modal')

    document.addEventListener('click', (e) => {
        
        if (!e.target.closest('.header-modal') && e.target.closest('.overlay')) {
            e.preventDefault()
            overlay.style.display = ""
            headerModalContent.style.display = ""
        } else if (e.target.closest('.header-modal__close')) {
            e.preventDefault()
            overlay.style.display = ""
            headerModalContent.style.display = ""
        } else if (e.target.closest('.button > .fancyboxModal')) {
            e.preventDefault()
            overlay.style.display = "block"
            headerModalContent.style.display = "block"
        }

        if (e.target.closest('.utp-button > .fancyboxModal')) {
            e.preventDefault()
            overlay.style.display = "block"
            servicesModal.style.display = "block"
        }
        
        if (e.target.closest('.service-button > .fancyboxModal')) {
            e.preventDefault()
            overlay.style.display = "block"
            servicesModal.style.display = "block"
        } else if (e.target.closest('.services-modal__close')) {
            e.preventDefault()
            overlay.style.display = ""
            servicesModal.style.display = ""
        } else if (!e.target.closest('.services-modal')  && e.target.closest('.overlay')) {
            e.preventDefault()
            overlay.style.display = ""
            servicesModal.style.display = ""
        }
    })
}

export default modal