import { formFizzBuzz, numberToTest, showErrorsParagraph } from '@ui/selectors'
import { createEntryObject, saveEntryObject } from '@core/fizzBuzz'
import printResult from '@ui/printResult'

const sendForm = () => {
    formFizzBuzz.addEventListener(
        'submit',
        (event) => {
            event.preventDefault()
            let numberReceive = parseInt(numberToTest.value)
            const messageNoNumber = `No has introducido un numero`

            if (isNaN(numberReceive) || !numberReceive)
                return (showErrorsParagraph.innerHTML = messageNoNumber)

            saveEntryObject(numberReceive)
            printResult(createEntryObject(numberReceive))
            formFizzBuzz.reset()
        },
        false
    )
}

export { sendForm }
