/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */

const calculateFizzBuzz = () => {
    //Si el número ingresado es divisible por 3, se muestra Fizz = 0.
    //Si el número ingresado es divisible por 5, se muestra Buzz Buzz = 1
    //Si el número ingresado es divisible por 3 y 5, se muestra FizzBuzz = 2
    //Si el número ingresado no es divisible ni por 3 ni por 5, se muestra el número mismo = 99
    //Return a number
}

const saveResult = () => {
    // Recibe number de funcion calculateFizzBuzz
    // Condicional
    // Almacenar objeto en const results
    const result = calculateFizzBuzz()
    const resultToSave = {
        status: '',
        message: '',
        data: {
            number: 0,
            result: '',
        },
    }
}

export { calculateFizzBuzz, saveResult }
