import { displayData } from '@ui/selectors'

const printResult = ({ data, message }) => {
    displayData.innerHTML += `<li><h2>${data.output}</h2><p><strong>${data.input}</strong> ${message}</p></li>`
}

export default printResult
