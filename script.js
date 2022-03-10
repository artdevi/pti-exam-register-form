const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', () => {
    if (submitButton.style.backgroundColor == 'black') {
        submitButton.style.backgroundColor = 'yellow'
    }
    else {
        submitButton.style.backgroundColor = 'black'
    }
})