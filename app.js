let isOpen = false
let isDark = false
const scaleFactor = 1 / 15


function moveShapes(event){
    const shapesArray = document.querySelectorAll('.shape')
    let x = event.clientX * scaleFactor;
    let y = event.clientY * scaleFactor;

    for (let i = 0; i < shapesArray.length; ++i){
        let isOdd = i % 2 !== 0
        let oddNum = isOdd ? -1 : 1
        shapesArray[i].style.transform = `translate(${x * oddNum}px, ${y * oddNum}px)`
    }
}

function toggleContrast(){
    if (isDark){
        isDark = false
        return document.body.classList.remove('dark-mode')
    }

    document.body.classList += ' dark-mode'
    isDark = true
}

function modalToggle(){
    if (isOpen){
        isOpen = false
        return document.body.classList.remove('modal--open')
    }

    document.body.classList += " modal--open"
    isOpen = true
}

function formSubmit(event){

    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    emailjs.sendForm(
        'service_a3ufidq',
        'template_y3b8l6l',
        event.target,
        'ZC243j5bYGcPXwooF'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => 
    alert("An error has occured, please contact me @ jaybalwani007@gmail.com directly.")
    )

    loading.classList += " modal__overlay--visible"
}