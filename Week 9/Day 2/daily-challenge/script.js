// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.


const arrayOfWords = ['apple', 'lemons', 'kiwi', 'avocado', 'papaya']

const makeAllCaps = (arr) => {
    let p = new Promise((resolve, reject) => {
        let newarr = arr.map(item => {
            if(typeof(item) == 'string') {
                return item.toUpperCase();
            }
            else {
                reject ()
            }
        })
        resolve(newarr)
    })
    return p;
    
}

makeAllCaps(arrayOfWords)
.then(data => console.log(data))
.catch(err => console.log('One of your items is not a string'))


const sortWords = () => {
    arrayOfWords.sort()
    console.log(arrayOfWords)
}
sortWords(arrayOfWords);
