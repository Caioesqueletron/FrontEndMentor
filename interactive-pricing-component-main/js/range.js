/*** Range Value */

function mostraResultado() {
    let value = document.getElementById('views')
    let slider = document.getElementById("campo")
    let money = document.getElementById("money")
    let toggle = document.getElementById("checkbox")
    console.log(toggle.checked)

    slider.value = parseInt(slider.value)
    if (!toggle.checked) {
        if (slider.value < 10000) {
            value.innerHTML = '10K'
            money.innerHTML = '$8'
        }
        else if (slider.value >= 10000 && slider.value < 50000) {
            value.innerHTML = '10K'
            money.innerHTML = '$8'

        }
        else if (slider.value >= 50000 && slider.value < 100000) {
            value.innerHTML = '100K'
            money.innerHTML = '$16'

        }
        else if (slider.value >= 100000 && slider.value < 500000) {
            value.innerHTML = '500K'
            money.innerHTML = '$24'

        }
        else if (slider.value >= 500000) {
            value.innerHTML = '500K'
            money.innerHTML = '$24'

            console.log(slider.value)
        }
        else if (slider.value === 900000) {
            value.innerHTML = '1M'
            money.innerHTML = '$36'


        }
    } else {
        if (slider.value < 10000) {
            value.innerHTML = '10K'
            money.innerHTML = '$'+(8*0.75)
            console.log(8*075)
        }
        else if (slider.value >= 10000 && slider.value < 50000) {
            value.innerHTML = '10K'

            money.innerHTML = '$'+(8*0.75)

        }
        else if (slider.value >= 50000 && slider.value < 100000) {
            value.innerHTML = '100K'
            money.innerHTML = '$'+(16*0.75)

        }
        else if (slider.value >= 100000 && slider.value < 500000) {
            value.innerHTML = '500K'
            money.innerHTML = '$'+(24*0.75)

        }
        else if (slider.value >= 500000) {
            value.innerHTML = '500K'
            money.innerHTML = '$'+(24*0.75)

            console.log(slider.value)
        }
        else if (slider.value === 900000) {
            value.innerHTML = '1M'
            money.innerHTML = '$'+(36*0.75)

        }
    }
}


/**Slider part */
const slider = document.getElementById("campo")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

slider.oninput = function () {
    this.style.background = `linear-gradient(to right,  hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 80%) ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
}

/** media Query */
let span = document.getElementById('discount')

if(window.matchMedia(700)){
    span.innerHTML = '-25%'
}
else 
{
    span.innerHTML = '25% discount'
}