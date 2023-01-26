const nettoToBrutto = document.getElementById('nettoToBrutto');
const bruttoToNetto = document.getElementById('bruttoToNetto');

const tax19percent = document.getElementById('tax19percent');
const tax7percent = document.getElementById('tax7percent');

const typeOfCalculation = document.getElementById('typeOfCalculation');
const inputSum = document.getElementById('inputSum');

const outputVat = document.getElementById('outputVat');

const endResultDescription = document.getElementById('endResultDescription');
const endResult = document.getElementById('endResult');


function nettoOrBrutto () {
  if (nettoToBrutto.checked === true) {
    typeOfCalculation.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    endResultDescription.innerHTML = "Bruttobetrag (Endpreis)";
  } else {
    typeOfCalculation.innerHTML = "Bruttobetrag (Preis inclusive Mehrwertsteuer) in Euro";
    endResultDescription.innerHTML = "Nettobetrag";
  }
}

function calculateResult () {
  const inputSumValue = inputSum.value;

  if (nettoToBrutto.checked === true && tax19percent.checked == true) {
    outputVat.innerHTML = (inputSumValue * 0.19).toFixed(2) + " €";
    endResult.innerHTML = (Number(inputSumValue) + Number(inputSumValue) * 0.19).toFixed(2) + " €";
  } else if (nettoToBrutto.checked === true && tax7percent.checked === true) {
    outputVat.innerHTML = (inputSumValue * 0.07).toFixed(2) + " €";
    endResult.innerHTML = (Number(inputSumValue) + Number(inputSumValue) * 0.07).toFixed(2) + " €";
  } else if (bruttoToNetto.checked === true && tax19percent.checked === true) {
    outputVat.innerHTML = (inputSumValue * 0.19).toFixed(2) + " €";
    endResult.innerHTML = (inputSumValue - inputSumValue * 0.19).toFixed(2) + " €";
  } else {
    outputVat.innerHTML = (inputSumValue * 0.07).toFixed(2) + " €";
    endResult.innerHTML = (inputSumValue - inputSumValue * 0.07).toFixed(2) + " €";
  }
}




