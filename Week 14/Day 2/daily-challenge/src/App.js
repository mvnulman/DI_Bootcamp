import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from './assets/img1.jpg'
import img2 from './assets/img2.webp'
import img3 from './assets/img3.webp'
import img4 from './assets/img4.webp'

function App() {
  return (
    <>
      <Carousel className="App">
        <div>
          <img src={img1} />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
        <img src={img2} />
          <p className="legend">Macao</p>
        </div>
        <div>
        <img src={img3} />
          <p className="legend">Japan</p>
        </div>
        <div>
        <img src={img4} />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </>
  );
}

export default App;
