const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    const root = document.getElementById('root')
    const header = document.createElement("header");
    const logo = document.createElement("h1");
    logo.textContent = "ROBO FRIENDS";
    
    const searchbar = document.createElement("input");
    searchbar.setAttribute('onkeyup', 'search()')
    searchbar.setAttribute('placeholder', 'Search your robot here...')
    
    const grid = document.createElement("div");
    
    grid.setAttribute('id', 'grid')
    
    root.appendChild(header);
    header.appendChild(logo);
    header.appendChild(searchbar);
    root.appendChild(grid);
    
    for (let i=0; i < robots.length; i++) {
        let card = document.createElement("div")
        card.setAttribute('class', 'card')
        card.setAttribute('id', robots[i].id)
    
        let image = document.createElement('img')
        image.setAttribute('src', robots[i].image)
    
        let h3 = document.createElement('h3')
        h3.textContent = robots[i].name;
    
        let cardp = document.createElement('p')
        cardp.textContent = robots[i].email;
    
        grid.appendChild(card)
        card.appendChild(image)
        card.appendChild(h3)
        card.appendChild(cardp)
    }
    
    let cards = document.querySelectorAll('.card')
    
    function search() {
        
        for (let i = 0; i < cards.length; i++) {
            let filter = searchbar.value.toUpperCase();
            let h3s = document.querySelectorAll('.card h3')
            console.log(h3s)
    
            let txt = h3s[i].innerText;
            console.log(txt)
    
            if(txt.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
            }
        }
    }