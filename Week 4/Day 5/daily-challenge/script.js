//array SolarSystem

let solarSystem = [

    {'name': 'Mercury', 'moons': 0, 'color': 'red'},
    {'name': 'Venus', 'moons': 0, 'color': 'orange'},
    {'name': 'Earth', 'moons': 1, 'color': 'blue'},
    {'name': 'Mars', 'moons': 2, 'color': 'lightblue'},
    {'name': 'Jupiter', 'moons': 79, 'color': 'brown'},
    {'name': 'Saturn', 'moons': 62, 'color': 'yellow'},
    {'name': 'Uranus', 'moons': 27, 'color': 'green'},
    {'name': 'Neptune', 'moons': 14, 'color': 'purple'},
]

// here needs to loop all the planets in the array(object)
for (planet of solarSystem) {
    // console.log(planet)
    // used console.log here to make sure that is looping correctly

    // create a planet
    let planetDiv = document.createElement('div')

    // add .planet class here
    planetDiv.classList.add('planet');

    // add name to the planets
    planetDiv.innerHTML = planet.name;
    // console.log(planetDiv);


    // adding the moons
    // limit the iteration loop
    let i = 1;

    //variable to store the moons
    let moonDiv;

    //loop the solarsystem till the number of moons
    while (i <= planet.moons){

        // create mon
        moonDiv = document.createElement('div');
        // console.log(moonDiv);

        // add moon class
        moonDiv.classList.add('moon');
        // console.log(moonDiv);

        // move the moons from the left side
        // console.log(i)
        let moveMoon = (i * 30) + 92 + 'px';
        moonDiv.style.left = moveMoon;

        // color the moon
        moonDiv.style.backgroundColor = 'white';

        //append the moon to the planets
        planetDiv.appendChild(moonDiv);

        i++;
    }


    //giving them Colors
    planetDiv.style.backgroundColor = planet.color;

    //appendChild needs to append to the body to work
    document.body.appendChild(planetDiv);
}