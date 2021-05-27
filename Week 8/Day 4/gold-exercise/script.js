let xhr = new XMLHttpRequest();
//open xhr - method, URL (mandatory), [sync, user, pass] (optional)
xhr.open('GET','https://api.giphy.com/v1/gifs/random?api_key=6FWRNXMBWZPPWKYVnN9kcDAd9xjiue1x')
//send the requests
xhr.send();
//triggers when getting the response
xhr.onload = function() {
    //to get the response as an object
    console.log(JSON.parse(xhr.response));

    // accessing objects with 1 method
    let new_url = JSON.parse(xhr.response)['data']['images']['original']['url'];
    // accessing objects with 2 method
    // let new_url = JSON.parse(xhr.response).data.images.original.url;
    let results = document.getElementById('results');
    let img = document.createElement('img')
    img.setAttribute('src', new_url)
    results.appendChild(img)
}