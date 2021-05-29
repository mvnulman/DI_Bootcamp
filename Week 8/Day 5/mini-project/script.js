/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const btnClearSearch = document.getElementById('clear')
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    //check if there's already a city
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(el => {
            let content = "";
            //athens,gr
            if (inputVal.includes(",")) {
                //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                //athens
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      }be more specific by providing the country code as well`;
            form.reset();
            input.focus();
            return;
        }
    }

    //ajax here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {
                main,
                name,
                sys,
                weather
            } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
            li.innerHTML = markup;
            list.appendChild(li);

            const btnX = document.createElement('button')
            btnX.classList.add('btn-x')
            const btnXTest = document.createTextNode('X')
            btnX.appendChild(btnXTest)
            li.appendChild(btnX)

            //X button to close each one of the cards.
            btnX.addEventListener ('click', () => {
              li.remove()
            })
            
        })
        .catch(() => {
            // alert (msg.textContent = "Invalid name! Search for a valid city again");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid name! Search for a valid city this time :)',
              })
        });

    msg.textContent = "";
    form.reset();
    input.focus();
    
});

//refresh the page to the delete the cards
function refreshPage(){
    window.location.reload();
} 



// var units = response.flags.units; 
// $(document).on("click", ".btn", function() {
//   if (units === "us") {
//     $currentTemp.html("");
//     var celsius = Math.round((farenheit - 32)/1.8);
//     $currentTemp.append(celsius + " C");
//     units = "si";
//   } else {
//     $currentTemp.html("");
//     $currentTemp.append(farenheit + " F");
//     units = "us";
//   }
// });


//            <button class="x-btn">X</button>