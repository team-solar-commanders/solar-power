'use strict'



let solArr = [];
function Solar(location, numberOfWatt, yourAmount) {
    this.location = location;
    this.numberOfWatt = numberOfWatt;
    this.yourAmount = yourAmount;
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
    let c = s * 850;


    let dv = document.getElementById('result');
    dv.textContent = "";
    if (350 < newNumber) {
        dv.textContent = ('Your facility need a solar system size of ' + Math.round(s * 100.0) / 100.0 + ' KW with an inverter of ' + Math.round(i * 100.0) / 100.0 + ' KW and ' + Math.round(p) + ' modules covering ' + Math.round(a) + ' square meter.' + 'with an estimated price of ' + Math.round(c) + ' Jordanian Dinar.');



    } else {
        dv.textContent = ("your facility does't need any solar panel.");

    }

}
let bestPrice = document.getElementById('bestPrice');
bestPrice.addEventListener('submit', handleSubmit1);

function handleSubmit1(e){
    e.preventDefault();
    let bestPrice = e.target.yourAmount.value;
    this.bestPrice = parseInt(bestPrice);
    console.log(bestPrice);

    // n : is the amount of kwatts based on the amount of money

    let n = bestPrice/850;
    let dv1 = document.getElementById('result1');
    dv1.textContent = "";
    if (n > 3.60){
    dv1.textContent = ("Based on your budget we can install a system with " + Math.round(n*100.0)/100.0 + " Kwatts to your facility.");
    }else{
    dv1.textContent = ("Based on your budget we can't install a system since it is below the legal size.");

    }

}
