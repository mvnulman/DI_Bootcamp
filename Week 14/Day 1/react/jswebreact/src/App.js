import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import 'tachyons';


function App() {

  const users = [
    {name:'Ziv', email:'zivuch@gmail.com', username:'zivuch'},
    {name:'Marcos', email:'Marcos@gmail.com', username:'MarcosN'},
    {name:'Lotan', email:'Lotan@gmail.com', username:'Lotan'},
    {name:'Dan', email:'Dan@gmail.com', username:'DanA'}
  ];


  return (
    <>

      {
        users.map((item,i)=>{
          return <Hello key={i} user={item} />
        })
      }

    </>
  );
}

export default App;
