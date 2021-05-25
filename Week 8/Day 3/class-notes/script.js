// create a new XMLHTTPRequest
let xhr = new XMLHttpRequest();

//open xhr - method, URL (mandatory), [sync, user, pass] (optional)
xhr.open('GET','https://zivuch.github.io/data.json')

//send the requests
xhr.send();

//triggers when getting the response
xhr.onload = function() {

    //to get xhr response with if statements
    console.log(xhr.response);
    if (xhr.status != 200){
        console.log(xhr.status)

    } else {
        console.log(xhr.response)

    }

    //to get the HTTP status code
    console.log(xhr.status)

    //to get the response as an object
    console.log(JSON.parse(xhr.response))
}

//show this message if the URL it's wrong, for instance.
xhr.onerror = function(){
    console.log('error!')
}


//to track the progress
xhr.onprogress = function (event) {
    console.log(event.loaded, event.total)
}