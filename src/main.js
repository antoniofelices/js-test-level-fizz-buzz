import './styles/main.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>FizzBuzz</h1>
    <form action="#" id="form-fizz-buzz">
        <label for="number-to-test"></label>
        <input type="number" id="number-to-test" />
        <button type="submit">Test it!</button>
    </form>
    <section>
      <ul id="display-data">
      </ul>
    </section>
  </div>
`
