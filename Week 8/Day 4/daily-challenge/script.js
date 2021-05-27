
let APIKEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", e => {
    e.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        // img.alt = content.data[0].title;
        // fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
        
        //button to delete only one giphy, attached to every single one
        let btnDeleteGiphy = document.createElement('button')
        let btnDeleteText = document.createTextNode('Delete')
        btnDeleteGiphy.appendChild(btnDeleteText)
        fig.appendChild(btnDeleteGiphy);
        
        //click action to delete individually each giphy!!!!!!!!!!!!
        btnDeleteGiphy.addEventListener('click', () =>{
          img.remove();
          if (img.remove = true) {
            btnDeleteGiphy.remove();
          }
        })
      })
  });
}

