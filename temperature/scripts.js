function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    
    if (isNaN(inputTemp)) {
        document.getElementById('results').textContent = "Please enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'celsius':
            celsius = inputTemp;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = inputTemp;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            kelvin = inputTemp;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
        default:
            document.getElementById('results').textContent = "Please select a valid unit.";
            return;
    }

    document.getElementById('results').innerHTML = `
        <p>${inputTemp} ${inputUnit === 'celsius' ? '°C (Celsius)' : inputUnit === 'fahrenheit' ? '°F (Fahrenheit)' : 'K (Kelvin)'} converts to:</p>
        <p>${celsius.toFixed(2)} °C (Celsius)</p>
        <p>${fahrenheit.toFixed(2)} °F (Fahrenheit)</p>
        <p>${kelvin.toFixed(2)} K (Kelvin)</p>
    `;
}
