import { formFizzBuzz, numberToTest, displayData } from '@ui/selectors'

const sendForm = () => {
    formFizzBuzz.addEventListener('submit', (event) => {
        event.preventDefault()

        numberToTest = parseInt(document.querySelector('#number-to-test')).value
        const messageNoNumber = `No has introducido un numero`

        if (isNaN(numberToTest))
            return (showErrorsDiv.innerHTML = messageNoNumber)
    })
}

export default sendForm
