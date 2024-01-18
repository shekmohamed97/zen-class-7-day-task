//3.Print the following details name, capital, flag, using forEach function

// creat a new xmlhttprequest object:
var req3=new XMLHttpRequest();

// define the API end point
var apiUrl= "https://restcountries.com/v3.1/all";

//open a get request to the API:
req3.open("GET",apiUrl,true);

//set the callback function to handle the respose:
req3.onloadend=function(){

  //check if the request is complete and successful (status code 200)
  if (req3.readyState==4 && req3.status==200){

    //pars the JSON response:
    var contries=JSON.parse(req3.responseText);

    //use the foreach function to print details fo each country:
    contries.forEach((country)=>{
      console.log("name:"+country.name.common);
      console.log("capital:"+(country.capital?country.capital[0]:"n/a"));
      console.log("flags:"+country.flags.png);
      console.log("--------------");
    })
  }
};

//send request:
req3.send();

//--------------------------------------------------------------------------------------

//4.Print the total population of countries using reduce function.

// creat a neq xlmhttprequest object:
var req4=new XMLHttpRequest();

//define the API endpont:
var apiUrl="https://restcountries.com/v3.1/all";

// open a GET request to the API:
req4.open("GET",apiUrl,true);

// set the call back function to handle the respose :
req4.onreadystatechange=function (){

  //check if the request is complete and successful ( status code 200):
  if ( req4.readyState==4 && req4.status==200){

    //parse the JSON respose:
    var countries=JSON.parse(req4.responseText);

    //use the reduce function to caculate the total population :
    var totalPopulation=countries.reduce((accumulator,country)=>{

      //assuming population is represnted by te 'population'key:
    return accumulator+(country.population);

    },0);

    //print the total population :
    console.log("total population:"+totalPopulation);
  }
};

//send the request:
req4.send();

//-------------------------------------------------------------------------

//5.Print the country that uses US dollars as currency.:

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the API endpoint
var apiUrl = "https://restcountries.com/v3.1/all";

// Open a GET request to the API
xhr.open("GET", apiUrl, true);

// Set the callback function to handle the response
xhr.onreadystatechange = function () {

  // Check if the request is complete and successful (status code 200)
  if (xhr.readyState == 4 && xhr.status == 200) {

    // Parse the JSON response
    var countries = JSON.parse(xhr.responseText);

    // Use the find function to get the country that uses US dollars
    var countryUsingUSD = countries.find(function (country) {

      // Assuming currency is represented by the 'currencies' key
      return (
        country.currencies &&
        country.currencies.hasOwnProperty("USD") &&
        country.currencies.USD
      );
    });


    // Print the country that uses US dollars
    if (countryUsingUSD) {
      console.log("Country using US dollars: " + countryUsingUSD.name.common);
    } else {
      console.log("No country found using US dollars.");
    }
  }
};

// Send the request
xhr.send();

//----------------------------------------------------------------------------------------------