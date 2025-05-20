import results from '@data/results'

const calculateFizzBuzz = (value) => {
    let statusCode = ''
    let message = ''
    let output = ''
    let result = {}

    const okText = 'ok'
    const failText = 'fail'
    const messageFizz = 'El número es divisible por 3'
    const messageBuzz = 'El número es divisible por 5'
    const messageFizzBuzz = 'El número es divisible por 3 y 5'
    const messageError = 'El número no es divisible por 3 ni por 5'
    const wordFizz = 'Fizz'
    const wordBuzz = 'Buzz'
    const wordFizzBuzz = 'FizzBuzz'

    statusCode =
        value % 15
            ? value % 3
                ? value % 5
                    ? failText
                    : okText
                : okText
            : okText

    message =
        value % 15
            ? value % 3
                ? value % 5
                    ? messageError
                    : messageBuzz
                : messageFizz
            : messageFizzBuzz

    output =
        value % 15
            ? value % 3
                ? value % 5
                    ? ''
                    : wordBuzz
                : wordFizz
            : wordFizzBuzz

    result = {
        status: statusCode,
        message: message,
        data: {
            input: value,
            output: output,
        },
    }

    return result
}

const saveResult = (value) => {
    const resultToSave = calculateFizzBuzz(value)
    results.push(resultToSave)
}

export { calculateFizzBuzz, saveResult }
