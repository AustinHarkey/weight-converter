let input = document.querySelector('.form__input');

input.addEventListener('input', function(e) {
    let pounds = e.target.value;

    let gramsOutput = document.getElementById('output__grams');
    let kiloOutput = document.getElementById('output__kilograms');
    let ouncesOutput = document.getElementById('output__ounces');

    gramsOutput.innerHTML = pounds/0.0022046;
    kiloOutput.innerHTML = pounds/2.2046;
    ouncesOutput.innerHTML = pounds*16;
  
});