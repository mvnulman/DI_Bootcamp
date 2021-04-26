
// define a function
function frame (){

    // Prompt the user
    let words = prompt("Please, input some words separated by commas");

    // convert all words to an array
    // take out spaces (map(), trim())
    // map (loops the array and changes each item based on a method or function that you want)
    // trim() takes out spaces in a string
    words = words.split(",").map(item => item.trim());

    // console.log(words);

    //find which is the longest
    let longest = '';

    // loop the array and check which one is the longest!
    for(word of words){

        //checking
        if (word.length > longest.length){

            longest = word;
        }
    }

    // console.log(longest);

    // print upper horizontal starts
    console.log("*".repeat(longest.length + 4));
    

    // print the * word *
    for (w of words){

        // create the space for each word that has less letters than the longest
        let space_W = (" ".repeat(longest.length - w.length));

        // print the space created with 2 vertical sides of the frame
        console.log(`* ${w}${space_W} *`);
    }

    // repeat * for the down horizontal part of the frame
    console.log("*".repeat(longest.length + 4));

}

//call the function
frame();