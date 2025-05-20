import { formFizzBuzz, showErrorsParagraph } from '@ui/selectors'
import { calculateFizzBuzz, saveResult } from '@core/fizzBuzz'
import printResult from '@ui/printResult'

const sendForm = () => {
    formFizzBuzz.addEventListener(
        'submit',
        (event) => {
            event.preventDefault()

            let numberToTest = 0
            const messageNoNumber = `No has introducido un numero`
            let result = 0

            numberToTest = parseInt(
                document.getElementById('number-to-test').value
            )

            if (isNaN(numberToTest) || !numberToTest)
                return (showErrorsParagraph.innerHTML = messageNoNumber)

            result = calculateFizzBuzz(numberToTest)
            saveResult(numberToTest)
            printResult(result)
            formFizzBuzz.reset()
        },
        false
    )
}

export default sendForm
