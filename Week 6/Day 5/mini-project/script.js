let quotes = [
    {
        id: 0,
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        likes: "1"
    },
    {
        id: 1,
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
        likes: "4"
      },
      {
        id: 2,
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        likes: "5"
      },
      {
        id: 3,
        author: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        likes: "2"
      },
      {
        id: 4,
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        likes: "1"
      },
      {
        id: 5,
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        likes: "5"
      },
      {
        id: 6,
        author: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        likes: "7"
      },
      {
        id: 7,
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans.",
        likes: "2"
      },
  ];

//Var to select the "generate quote" button
var btnQuotes = document.getElementById('new-quote');
// console.log(btnQuotes)

//Var to select the "quote message display"
var quoteDisplay = document.getElementById('quote')
// console.log(quoteDisplay)

//Var to select the "author message display"
var authorDisplay = document.getElementById('author')
// console.log(authorDisplay)

//Var to select the "Add quotes button"
var addNewQuotes = document.getElementById('add-quotes-button');
// console.log(addNewQuotes)

//Var to select the "Like button"
var likeButton = document.getElementById('likebtn');
// console.log(likeButton)


//function to display the content of the array "quotes", after click
//in the "generate quote button"
btnQuotes.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);
    quoteDisplay.innerText = quotes[random].quote
    authorDisplay.innerText = quotes[random].author;
}) 


//function to allow the user add new quotes to the array
addNewQuotes.addEventListener('click', function (){
  let author = document.getElementById('addauthor').value;
  let quote = document.getElementById('addquote').value;
  var likes = document.getElementById('likebtn').value
  document.getElementById('form').reset()

  // you can add any validations - like both items should be non empty before you push
  quotes.push({
    id: quotes.length,
    author,
    quote,
    likes,
  });


  // console.log(quotes);
})


// A button that gives the number of character inside each quote (space included)


// A button that gives the number of character inside each quote (space NOT included)


// A button that gives the number of words in each quote
