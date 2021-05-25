//---------------------------
// Exercise 1 : Giphy API
//---------------------------
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// 1 - Create a program to fetch the API URL provided above.
// 2 -Make an AJAX request to the Giphy API and return an Object.


//---------------------------------------------------------------------------
let xhr = new XMLHttpRequest();

//open xhr - method, URL (mandatory), [sync, user, pass] (optional)
xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

//send the requests
xhr.send();

//triggers when getting the response
xhr.onload = function() {
    //to get the response as an object
    console.log(JSON.parse(xhr.response))
}

//-------------------------
// Exercise 2 : Giphy API
//--------------------------
// Instructions
// Using this part of the documention (https://developers.giphy.com/docs/api/endpoint/#search), retrieve 10 gifs about the “sun”. The starting position of the results should be 2.

let xhr2 = new XMLHttpRequest();

//open xhr - method, URL (mandatory), [sync, user, pass] (optional)
xhr.open('GET','https://api.giphy.com/v1/gifs/search?api_key=6FWRNXMBWZPPWKYVnN9kcDAd9xjiue1x&q=sun&limit=10&offset=2&rating=g&lang=en')

//send the requests
xhr.send();

//triggers when getting the response
xhr.onload = function() {
    //to get the response as an object
    console.log(JSON.parse(xhr.response))
}
