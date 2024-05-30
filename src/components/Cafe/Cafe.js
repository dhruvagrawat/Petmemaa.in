import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

//assests import
import head from '../../Assets/Cafe/head.png';
import line from '../../Assets/Cafe/line.png';
import dogbowl from '../../Assets/Cafe/dogbowl.png';
import emoji from '../../Assets/Cafe/emoji.png';
import human from '../../Assets/Cafe/human.png';
import menu from '../../Assets/Cafe/menu.png';
import ldog from '../../Assets/Cafe/ldog.png';
import emo2 from '../../Assets/Cafe/emo2.png';

const Cafe = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={head} alt='head'></img>
        <img src={line} alt='line'></img>
      </div>
      <div>
        <div>
          <div>
            <img src={dogbowl} alt='dogbowl'></img>
          </div>
          <div>
            <div>
              <h1>Serving up smiles,</h1>
              <img src={emoji} alt='emoji'></img>
            </div>
            <h1>one paw-some meal at a time.</h1>
            <p>From gourmet treats to hearty meals, our chefs craft each item with care, using only the finest ingredients to ensure that every bite is both delicious and nutritious.</p>
            <button>Book an appointment</button>
          </div>
        </div>
        <div>
          <div>
            <img src={human} alt='human'></img>
          </div>
          <div>
            <h1>
              CAFE POOCH
            </h1>
            <p>
              At Cafe Pooch, we believe in fostering a sense of community among pets and  their owners alike. Whether you're looking to socialise with fellow pet enthusiasts or simply enjoy a peaceful moment with your furry friend, our café is the perfect spot to connect and create lasting memories. <br></br>Join us at Cafe Pooch, where every wag and meow is celebrated, and the bond between pets and people is cherished.
            </p>
            <button>Check out Gallery</button>
          </div>
        </div>
        <div>
          <div>
            <h1>A Spot for You & <br></br>Your Furry Friend</h1>
            <p>Cafe Pooch isn't just a coffee shop, it's a tail-wagging good time for you and your furry best friend!
              <br></br>
              We've designed a space where both pet owners and pets can relax, socialise, and create lasting memories.
              <br></br>
              At Cafe Pooch, we believe pets are family. So, come join us for a day of fun, friendship, and unforgettable moments with your furry companion!</p>
            <button>Book an reservation</button>
          </div>
        </div>
        <div>
          <img src={menu} alt='menu'></img>
        </div>
        <div>
          <div>
            <p>Delivering Tail-Wagging<br></br> Taste to Your <b>Doorstep</b> <br></br>as well!</p>
            <img src={emo2} alt='emo2'></img>
          </div>
          <div>
            <img src={ldog} alt='lastdog'></img>
          </div>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Cafe