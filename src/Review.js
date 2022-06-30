import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % people.length);
  };

  const prev = () => {
    setIndex((index - 1) % people.length);
  };

  const random = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = (randomIndex + 1) % people.length;
    }
    setIndex(randomIndex);
  };
  return (
    <div className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={people[index].image}
          alt={people[index].name}
        ></img>
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{people[index].name}</h4>
      <div className="job">{people[index].job}</div>
      <p className="info">{people[index].text}</p>
      <button className="prev-btn" onClick={prev}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={next}>
        <FaChevronRight />
      </button>
      <div>
        <button className="random-btn" onClick={random}>
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Review;
