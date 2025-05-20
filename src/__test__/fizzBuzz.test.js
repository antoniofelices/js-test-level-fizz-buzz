import { describe, it, expect } from 'vitest'

import { calculateFizzBuzz } from '@core/fizzBuzz'

describe('FizzBuzz test for multiples of 3 and 5', () => {
    it('returns Fizz when multiple of 3', () => {
        let valueInput = 9
        let expectedReturn = {
            status: 'ok',
            message: 'El número es divisible por 3',
            data: {
                input: 9,
                output: 'Fizz',
            },
        }

        let result = calculateFizzBuzz(valueInput)

        expect(typeof result.data.input).toBe('number')
        expect(result).toEqual(expectedReturn)
        expect(result.data.output).toBe('Fizz')
    })
    it('returns Buzz when multiple of 5', () => {
        let valueInput = 10
        let expectedReturn = {
            status: 'ok',
            message: 'El número es divisible por 5',
            data: {
                input: 10,
                output: 'Buzz',
            },
        }

        let result = calculateFizzBuzz(valueInput)

        expect(typeof result.data.input).toBe('number')
        expect(result).toEqual(expectedReturn)
        expect(result.data.output).toBe('Buzz')
    })

    it.skip('returns FizzBuzz when multiple of 3 and 5', () => {
        //Gherking test
        /**
         * Scenario: Número divisible por 3 y 5
         * Given un número 15
         * When el número es procesado
         * Then se muestra "FizzBuzz"
         */
    })

    it.skip('returns number when is not multiple of 3 and 5', () => {
        //Gherking test
        /**
         * Scenario: Número no divisible por 3 ni 5
         * Given un número 8
         * When el número es procesado
         * Then se muestra el número ingresado
         */
    })
})
