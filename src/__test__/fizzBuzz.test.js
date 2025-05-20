import { describe, it, expect, test } from 'vitest'

import { calculateFizzBuzz } from '@core/fizzBuzz'

describe('FizzBuzz test for multiples of 3 and 5', () => {
    test('returns Fizz when multiple of 3', () => {
        let valor_entrada = 9
        let respuesta_esperada = {
            status: 'ok',
            message: 'El número es divisible por 3',
            data: {
                input: 9,
                output: 'Fizz',
            },
        }

        let resultado = calculateFizzBuzz(valor_entrada)

        expect(typeof resultado.data.input).toBe('number')
        expect(resultado).toEqual(respuesta_esperada)
        expect(resultado.data.output).toBe('Fizz')
    })
    test('returns Buzz when multiple of 5', () => {
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
    test.skip('returns Buzz when multiple of 5', () => {
        //Gherking test
        /**
         * Scenario: Número divisible por 5
         * Given un número 10
         * When el número es procesado
         * Then se muestra "Buzz"
         */
        // Arrange
        // Act
        // Assert
    })

    test.skip('returns FizzBuzz when multiple of 3 and 5', () => {
        //Gherking test
        /**
         * Scenario: Número divisible por 3 y 5
         * Given un número 15
         * When el número es procesado
         * Then se muestra "FizzBuzz"
         */
    })

    test.skip('returns number when is not multiple of 3 and 5', () => {
        //Gherking test
        /**
         * Scenario: Número no divisible por 3 ni 5
         * Given un número 8
         * When el número es procesado
         * Then se muestra el número ingresado
         */
    })
})
