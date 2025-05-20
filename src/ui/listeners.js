import { formFizzBuzz, numberToTest } from '@ui/selectors'
import { calculateFizzBuzz } from '@core/fizzBuzz'
import printResult from '@ui/printResult'

const sendForm = () => {
    formFizzBuzz.addEventListener('submit', (event) => {
        event.preventDefault()

        numberToTest = parseInt(document.querySelector('#number-to-test')).value
        const messageNoNumber = `No has introducido un numero`
        let result = 0
        const messageFizz = 'Fizz'
        const messageBuzz = 'Buzz'
        const messageFizzBuzz = 'FizzBuzz'

        if (isNaN(numberToTest))
            return (showErrorsDiv.innerHTML = messageNoNumber)

        result = calculateFizzBuzz(numberToTest)
        printResult(result)
    })
}

export default sendForm

// Solo voy a tener un listener === cuando se envia el form.

// Cuando se envia form:
//  Se captura valor del input
//  Se comprueba si es numero o.
//    Si no lo es se muestra mensaje en pantalla. <- Hasta aca ui
//    Si es numero se llama a la funcion calculateFizzBuzz
//    Se llama a funcion print result y se modifica la lista. Se añade un elemento abajo de todo.
