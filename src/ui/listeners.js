import { formFizzBuzz, showErrorsParagraph } from '@ui/selectors'
import { createEntryObject, saveEntryObject } from '@core/fizzBuzz'
import printResult from '@ui/printResult'

const sendForm = () => {
    formFizzBuzz.addEventListener(
        'submit',
        (event) => {
            event.preventDefault()

            let numberToTest = 0
            const messageNoNumber = `No has introducido un numero`

            numberToTest = parseInt(
                document.getElementById('number-to-test').value
            )

            if (isNaN(numberToTest) || !numberToTest)
                return (showErrorsParagraph.innerHTML = messageNoNumber)

            saveEntryObject(numberToTest)
            printResult(createEntryObject(numberToTest))
            formFizzBuzz.reset()
        },
        false
    )
}

export { sendForm }
