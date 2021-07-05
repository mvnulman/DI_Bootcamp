import React from 'react';
import './MyComponents.css'

const myStyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
    display: 'inline'
}

const mySuperStyles = {
    color: 'yellow',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '1px solid yellow',
    backgroundColor: 'black',
    padding: '5px',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '10px',
    display: 'inline'

}

function MyComponent() {
    return (

      <div className = "container">
        <h2>Exercise 1 : HTML Tags In React</h2>
        <h1>This is a Header</h1>
        <br></br>
  
        <p>This is a Paragraph</p>
        <br></br>
  
        <a href="https://www.w3schools.com/html/html_links.asp">This is a Link</a>

  
        <h3>This is a Form:</h3>
        <p>Enter your name:</p>
        <input type="text" placeholder=""></input>
        <button>Submit</button>
  
        <h4>Here is an Image:</h4>
        <img src="https://www.inspiredtraveler.ca/wp-content/uploads/2021/04/thumb-1920-909641-800x450.png" width="450px" />
  
        <h5>His is a List:</h5>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        <br></br>
        <br></br>

        <h2>Exercise 3 : Styling React Using CSS #2</h2>
        <h2 style={{color: 'red', background: 'lightblue', display: 'inline'}}>Hello Style</h2>
        <br></br>
        <br></br>

        <h2 style={myStyle}>Hello Style!</h2>
        <br></br>
        <br></br>

        <h2>Exercise 4 : Styling React Using CSS #3</h2>
        <h2 style={mySuperStyles}>I'm a stylish button</h2>
        <br></br>
        <br></br>

        <h2>Exercise 5 : Styling React Using CSS #4</h2>
        <br></br>
        <br></br>
        <h2 className='newStyle'>Hello Style!</h2>

      </div>
    );
  }
  

export default MyComponent;