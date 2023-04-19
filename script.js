//01. Get all the countries from the Asia continent /region using the Filter function

let xhr = new XMLHttpRequest();
xhr.open ("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let x = JSON.parse(xhr.response);
    if(xhr.status == 200){
        let filterValue = x.filter((value)=>(value.region == "Asia"));
        console.log(filterValue);
    }else{
        console.log(xhr.status);
    }
}

//02. Get all the countries with a population of less than 2 lakhs using Filter function

let xhr = new XMLHttpRequest();
xhr.open ("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let x = JSON.parse(xhr.response);
    if(xhr.status == 200){
        let filterValue = x.filter((value)=>(value.population < 200000 ));
        console.log(filterValue);
    }else{
        console.log(xhr.status);
    }
}

//03. Print the following details name, capital, flag using forEach function 

let xhr = new XMLHttpRequest();
xhr.open ("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let arr = JSON.parse(xhr.response);
    if(xhr.status == 200){
        arr.forEach((obj, index) => {
        console.log(obj.name, obj.flags, obj.capital)
    });
    }
    else{
        console.log(xhr.status);
    }
}

//04. Print the total population of countries using reduce function

let xhr = new XMLHttpRequest();
xhr.open ("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    let arr = JSON.parse(xhr.response);
    if(xhr.status == 200){  
      function population(total, pop){
        return total + parseInt(pop.population);
    }
    console.log(arr.reduce(population, 0));
    }
    else{
        console.log(xhr.status);
    }
}

//05. Print the country which uses US Dollars as currency.

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    let arr = JSON.parse(xhr.response);
    if (xhr.status == 200) {
    function countriesDollar() {
    for(let i = 0; i < arr.length; i++) {
    let country = arr[i];
    let currencies = country.currencies;
    for (let dollar in currencies) {
    let currency = currencies[dollar];
    if (currency.symbol === "$") {
    console.log(country.name.common);
    }}}}
    countriesDollar();  
    }
    else {
        console.log(xhr.status);
    }
}
