import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGM-xTiGoilyYd-cxlINGWzrIIMg7pV9m90w&usqp=CAU"
        alt=""
      />
      <div>
      <h2>Typography Eat Sleep Travel Repeat, Adventure, Phrase, Mountain</h2>
      <p>
        Adventure travel. Adventure travel Backpacking Vacation Love,
        Travel, backpack, adventure, magico png thumbnail Adventure travel
        Backpacking
      </p>
      </div>
      <div>
        <h2>Your destination is waiting. <br/> Your van is ready.</h2>
        <Link to="/vans">Explore our vans</Link>
      </div>
    </div>
  );
}

export default About;
