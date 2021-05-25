const showRobots = () => {
  let x = new XMLHttpRequest();
  x.open('GET', 'https://jsonplaceholder.typicode.com/users');
  x.send();
  x.responseType = 'json';
  x.onload = function(){
    let robotsArray = x.response;
    createRobots(robotsArray);
  }
}

const getXML = () => {
  let x = new XMLHttpRequest();
  x.open('GET', 'https://zivuch.github.io/emails.xml');
  x.send();
  x.responseType = 'document';
  x.onload = function(){
    let xml = x.response;
    let emails = xml.getElementsByTagName('email');
    for (var i = 0; i < emails.length; i++) {
      console.log(emails[i].getElementsByTagName('to')[0].childNodes[0].nodeValue)
    }
  }
}

const createRobots = (arr) => {
  const root = document.getElementById('root');
  arr.forEach((item) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = item.name;
    div.appendChild(p);
    let p1 = document.createElement('p');
    p1.innerText = item.email;
    div.appendChild(p1);
    let i = document.createElement('img');
    i.setAttribute('src',`https://robohash.org/${item.id}?size=200x200`);
    div.appendChild(i);
    root.appendChild(div);
  });

}
