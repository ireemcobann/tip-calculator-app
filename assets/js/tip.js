let tipAmountValue = 0;
let totalValue= 0;

function calculateValue () {
    if(dolorInput.value !== '' && custom.value !== '' && peopleInput.value !== '' && peopleInput.value > 0 ){
        totalValue = Number(dolorInput.value) * Number((custom.value / 100));
        tipAmountValue = totalValue / Number(peopleInput.value);
    
        tipAmount.innerHTML = `<p id="tipAmount">${tipAmountValue.toFixed(2)}</p>`;
        totalAmount.innerHTML = ` <p id="totalAmount">${totalValue.toFixed(2)}</p>`;
    }


}

const error = document.querySelector('.error');
peopleInput.addEventListener('input', errorZero);


function errorZero() {
    if(peopleInput.value ==='0') {
        error.style.display= 'block';
    }else
    error.style.display = 'none';
}
errorZero();



dolorInput.addEventListener('input', calculateValue);
custom.addEventListener('input', calculateValue);
peopleInput.addEventListener('input', calculateValue);



calculateValue();

const tipAmount = document.querySelector('#tipAmount');  
const totalAmount = document.querySelector('#totalAmount'); 

const resetBtn = document.querySelector('.resetbtn');
resetBtn.addEventListener('click',resetValues);

function resetValues() {
        dolorInput.value = '';
        custom.value = '';
        peopleInput.value = ''
        tipAmount.innerText = '$0.00';
        totalAmount.innerText ='$0.00';
   
}





