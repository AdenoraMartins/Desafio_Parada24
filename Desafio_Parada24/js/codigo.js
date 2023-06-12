var div = document.getElementById("resp");

function converter_temp(){

    let celsius = parseFloat(document.getElementById("celsius").value);

    if(isNaN (celsius) || celsius === " "){
        alert("Insira um número!")
    }else{

    let fahrenheit = (celsius * 9/5) +32;
    let kelvin = celsius + 273.15;

    let text = ` <p> ${celsius} °C = ${fahrenheit} °F </p>`;
    text += ` <p> ${celsius} °C = ${kelvin} K </p>`;

    div.innerHTML = text;

    }
}