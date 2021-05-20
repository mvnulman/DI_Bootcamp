// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

const teams = [{
    title: 'MIBR',
    uploader: 'Fallen',
    time: '50s'
}, {
    title: 'Liquid',
    uploader: 'Stewie',
    time: '130s'
}, {
    title: 'Australis',
    uploader: 'Magisk',
    time: '24s'
}, {
    title: 'Furia',
    uploader: 'Vini',
    time: '50s'
}, {
    title: 'FAZE Clan',
    uploader: 'Coldzera',
    time: '240s'
}]

let mibrNew = new Video(teams[0].title, teams[0].uploader, teams[0].time);
mibrNew.watch()

let liquidNew = new Video(teams[1].title, teams[1].uploader, teams[1].time);
let australisNew = new Video(teams[2].title, teams[2].uploader, teams[2].time);
let furiaNew = new Video(teams[3].title, teams[3].uploader, teams[3].time);
let fazeNew = new Video(teams[4].title, teams[4].uploader, teams[4].time);
