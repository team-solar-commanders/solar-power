'use strict'



let solArr = [];
function Solar(location, numberOfWatt) {
    this.location = location;
    this.numberOfWatt = numberOfWatt;
    solArr.push(this);

}



let solarForm = document.getElementById('solarForm');

solarForm.addEventListener('submit', handleSubmit);
// let newNumber;
function handleSubmit(event) {
    event.preventDefault();
    // this.newNumber = event.target.numberOfWatt.value;

    let newNumber = event.target.numberOfWatt.value;
    this.newNumber = parseInt(newNumber);
    console.log(newNumber);
    // s : system size 
    // i : inverter size 
    // P : NUMBER OF PANELS 
    // a : area 
    let s = newNumber / (4 * 0.77 * 1 * 30);
    let i = (newNumber / 30) / 4 * 1.25;
    let p = (newNumber / 41);
    let a = p * 2;


    let dv = document.getElementById('result');
    dv.textContent = "";
    if (350 < newNumber) {
        dv.textContent = ('Your facility need a solar system size of ' + Math.round(s * 100.0) / 100.0 + ' KW with an inverter of ' + Math.round(i * 100.0) / 100.0 + ' KW and ' + Math.round(p) + ' modules covering ' + Math.round(a) + ' square meter.');



    } else {
        dv.textContent = ("your facility does't need any solar panel");

    }

}

