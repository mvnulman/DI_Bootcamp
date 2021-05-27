let xhr = new XMLHttpRequest();
//open xhr - method, URL (mandatory), [sync, user, pass] (optional)
xhr.open('GET','https://api.giphy.com/v1/gifs/random?api_key=6FWRNXMBWZPPWKYVnN9kcDAd9xjiue1x&tag=&rating=g')
//send the requests
xhr.send();
//triggers when getting the response
xhr.onload = function() {
    //to get the response as an object
    console.log(JSON.parse(xhr.response)['data']['fixed_width_downsampled_url']);
    console.log(JSON.parse(xhr.response).data.fixed_width_downsampled_url);
    console.log(JSON.parse(xhr.response).data.slug);
    let new_url = JSON.parse(xhr.response)['data']['fixed_width_downsampled_url'];
    console.log(JSON.parse(xhr.response));

    let results = document.getElementById('results');
    let img = document.createElement('img')
    img.setAttribute('src', new_url)
    results.appendChild(img)
}
// let results = document.getElementById('results');
// Work with Daniel -------
// results.style.backgroundColor = “red”; // OK
// Ziv Method
// let h3_elem = document.createElement('h3');
// let html_text = document.createTextNode('This is some text');
// h3_elem.appendChild(html_text);
// // Add some attribute =>
// h3_elem.setAttribute('src', 'url.........')
// results.appendChild(h3_elem);
// // Objects
// let obj = {
//     'key': {
//         'name':'Daniel',
//         'age': 87,
//     },
//     'family': 'Tolila',
// }
// console.log(obj.key.age);
// console.log(obj['key']['age']);
// // json
// // {
// //     data: {
// //     }
// // }