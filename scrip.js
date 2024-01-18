
// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// 1.Get all the countries from Asia continent /region using Filter function:

// crat a new xmlhattp request object
var req1 = new XMLHttpRequest();
//defaine the API endpoint:
var apiUrl="https://restcountries.com/v3.1/all";
//open a GET request to the API:
req1.open("GET", apiUrl, true);
// set the callback function to handle the response:
req1.onreadystatechange = function () {
//check if the request is completed and successful (status code 200)
    if (req1.readyState == 4 && req1.status == 200) {
  //parse the JSON response
    var countries= JSON.parse(req1.responseText);    
  //use the filter function to get countries from asia
    var asiaCountries = countries.filter( (country)=> ( country.region === "Asia"));
  //print the names of contries in asia
   asiaCountries.forEach((country)=> {
      console.log(country.name.common);
     });
  }
};
// send request:
req1.send();

//---------------------------------------------------------------------------------------------------------------------------------------------

//2.Get all the countries with a population of less than 2 lakhs using Filter function:
// creat a neq xmlhttprequest object:
var req2 = new XMLHttpRequest();
//define the API endpoint:
var apiUrl = "https://restcountries.com/v3.1/all";
//open a get request to the API:
req2.open("GET", apiUrl, true);
// set the callback function to handle the response:
req2.onreadystatechange = function () {
   //check if the request is complted and succsessful (staus code 200)
   if (req2.readyState == 4 && req2.status == 200) { 
    //pars the JSON response
    var countries = JSON.parse(req2.responseText);
    //sue the filter function to get countries with a population of less than 200,000
    var countriesWithLowPopulation = countries.filter( (country)=> {
      //assuming population is represented by the 'population'key
      return country.population < 200000;
    });  
   //print the names of countries with low population
   countriesWithLowPopulation.forEach( (country)=>{
    console.log(country.name.common);
})
}}
// Send the request
req2.send();   
