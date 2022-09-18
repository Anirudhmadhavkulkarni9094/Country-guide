let search_btn = document.getElementById('input-btn');
let result = document.getElementById('result')
let countryInp = document.getElementById('country-inp');
search_btn.addEventListener('click', () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((res) =>
        res.json()).then((data) => {
            console.log(data);
            result.innerHTML = 
            `
                <img src= "${data[0].flags.svg}" class="flag-img">
                <h2>Name : ${data[0].name.common}</h2>
                <h2>Captial : ${data[0].capital[0]}</h2>
                <h2>Continent : ${data[0].continents[0]};
                <h2>Languages : ${Object.values(data[0].languages).toString().split(",").join(", ")}</h2>
                <h2>Currencies : ${Object.keys(data[0].currencies)[0]}
              
                `
        }).catch(()=>{
            if(countryName.length == 0){
                result.innerHTML = `<h1 class="warning">Please enter a country name!`;
            }
            else{
                result.innerHTML= `<h1 class="warning">${countryName} is not a valid country<br>Please enter a valid country name</h1>`
            }
        })
})
