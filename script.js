let input = document.querySelector('.form__input');
let output = document.querySelector('.output');
output.style.display = 'none'

input.addEventListener('input', function(e) {
    let pounds = e.target.value;

    let gramsOutput = document.getElementById('output__grams');
    let kiloOutput = document.getElementById('output__kilograms');
    let ouncesOutput = document.getElementById('output__ounces');

    gramsOutput.innerHTML = (pounds/0.0022046).toFixed(2);
    kiloOutput.innerHTML = (pounds/2.2046).toFixed(2);
    ouncesOutput.innerHTML = (pounds*16).toFixed(2);

    output.style.display = 'block';

    if (e.target.value == '') {
        output.style.display = 'none';
    }
  
});