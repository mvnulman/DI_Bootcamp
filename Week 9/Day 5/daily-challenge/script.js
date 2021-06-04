const from = document.getElementById('from');
const to = document.getElementById('to');
const amount = document.getElementById('amount');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const convertCurrency = async () => {
    try {
        const response = await fetch('http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6');
        const res = await response.json();
        console.log(res)
        let names = res.currencies;
        let currencies = Object.entries(names);

        let rates = res;

        for (let i=0; i < currencies.length; i++) {

            let optionFrom = document.createElement('option')
            optionFrom.setAttribute('value', currencies[i][0])
            optionFrom.textContent = `${currencies[i][0]} - ${currencies[i][1]}`
            from.appendChild(optionFrom)

            let optionTo = document.createElement('option')
            optionTo.setAttribute('value', currencies[i][0])
            optionTo.textContent = `${currencies[i][0]} - ${currencies[i][1]}`
            to.appendChild(optionTo)
        }


    } catch {
        console.log('Error: Failed to fetch the API')
    }
}

convert.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const conversion = await fetch('http://api.currencylayer.com/live?access_key=075d15d60a95b06528ad8d5812e3d35e')
        let conversionJson = await conversion.json();
        let rates = await conversionJson.quotes;
    
        let inputFrom = from.value;
        let inputTo = to.value;
    
        let rate1 = rates[`USD${inputFrom}`];
        let rate2 = rates[`USD${inputTo}`];
    
        let final = (rate2 / rate1) * amount.value;

        result.textContent = final

    } catch {
        console.log('Error! Check the conversion')
    }

    
})
convertCurrency()