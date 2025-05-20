import { describe, it, expect } from 'vitest'
import { createEntryObject } from '@core/fizzBuzz'

describe('FizzBuzz test for multiples of 3', () => {
    it('returns Fizz when multiple of 3', () => {
        let valueInput = 9
        let expectedReturn = {
            status: 'ok',
            message: 'El número es divisible por 3',
            data: {
                input: valueInput,
                output: 'Fizz',
            },
        }

        let result = createEntryObject(valueInput)

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
                input: valueInput,
                output: 'Buzz',
            },
        }

        let result = createEntryObject(valueInput)

        expect(typeof result.data.input).toBe('number')
        expect(result).toEqual(expectedReturn)
        expect(result.data.output).toBe('Buzz')
    })

    it('returns FizzBuzz when multiple of 3 and 5', () => {
        let valueInput = 15
        let expectedReturn = {
            status: 'ok',
            message: 'El número es divisible por 3 y 5',
            data: {
                input: valueInput,
                output: 'FizzBuzz',
            },
        }

        let result = createEntryObject(valueInput)

        expect(typeof result.data.input).toBe('number')
        expect(result).toEqual(expectedReturn)
        expect(result.data.output).toBe('FizzBuzz')
    })

    it('returns number when is not multiple of 3 and 5', () => {
        let valueInput = 16
        let expectedReturn = {
            status: 'fail',
            message: 'El número no es divisible por 3 ni por 5',
            data: {
                input: valueInput,
                output: '',
            },
        }

        let result = createEntryObject(valueInput)

        expect(typeof result.data.input).toBe('number')
        expect(result).toEqual(expectedReturn)
        expect(result.data.output).toBe('')
    })
})
