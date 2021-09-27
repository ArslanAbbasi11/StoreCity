import React, {useState,useRef,useEffect} from 'react'
import Loading from '../../../Components/Loading/Loading';
import './Carousel.css'
const Carousel=(props)=> {


 

const delay = 4000;
const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.limitProd?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        { props.limitProd?.map((value, index) => (
       
              <figure  className="slide" key={index} >
                  <img src={value.image} alt="carousel products images"/>
                  <h4>{value.title}</h4>
              </figure>
        ))}
      </div>

      <div className="slideshowDots">
        {props.limitProd?.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export {Carousel}
