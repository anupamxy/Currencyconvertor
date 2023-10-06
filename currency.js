
const fromCurrencyInput = document.getElementById("fromCurrency");
const toCurrencyInput = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");


document.getElementById("convert").addEventListener("click", convertCurrency);

async function convertCurrency() {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0f626657bamsh0ef7c86d9b9fba1p174806jsn4059fc13e714',
          'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
          
        }
    };
  const have = fromCurrencyInput.value;
  const want = toCurrencyInput.value;
  const amount = amountInput.value;

  // Modify the URL based on user input
  const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;


  // Fetch and handle the conversion result here
  try {
    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data.new_amount);
    result.innerHTML=data.new_amount;
    

  
  } catch (error) {
    console.log(error);
  }
}

