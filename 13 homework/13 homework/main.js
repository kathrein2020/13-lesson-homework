let apiKey = "344e53cc3d09e7597a1f093d"   // ключ после регистрации на почтк будет
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("from-cur-select");
const toDropDown = document.getElementById("to-cur-select");


//from Dropdown от массива валют currencies

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

//to Dropdown от массива валют currencies

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});


//default значения
fromDropDown.value = "USD";
toDropDown.value = "KZT";


convertCurrency = () => {

    try {

    const amount = document.querySelector("#amount").value;

    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    //если поле значения не пустое
if (amount.length != 0) {
//alert("ok");
fetch(api)

.then((resp) => resp.json())
.then((data) =>   {
    //console.log(data));

let fromExchangeRate = data.conversion_rates[fromCurrency];
let toExchangeRate = data.conversion_rates[toCurrency];

//просчет и вывод на экран

const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;

resultUSD.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)}`;


})

}
else {
    alert("Заполните поле для просчета")
}
    } catch(error) {
        console.log(error)
    } 

};


document.querySelector("#convert-button") .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);


