import results from '@data/results'

const calculateFizzBuzz = (value) => {
    let message = ''
    let output = ''
    let result = {}
    const messageFizz = 'El número es divisible por 3'
    const messageBuzz = 'El número es divisible por 5'
    const messageFizzBuzz = 'El número es divisible por 3 y por 15'
    const wordFizz = 'Fizz'
    const wordBuzz = 'Buzz'
    const wordFizzBuzz = 'FizzBuzz'

    // if (value % 5 != 0) return `${value}`
    // if (value % 3 != 0) return `${value}`

    message =
        value % 15
            ? value % 3
                ? value % 5
                    ? ''
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
        status: 'ok',
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
