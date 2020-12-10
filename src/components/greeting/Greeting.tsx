import React, { ReactElement } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useSpring, animated } from 'react-spring';
import '../../scss/greeting/Greeting.scss';
import { Link } from 'react-router-dom';

export default function Greeting(): ReactElement {
  const props = useSpring({
    marginTop: 0,
    from: { marginTop: 1000 },
    config: { duration: 2000 },
  });
  return (
    <div className="bgGreet">
      <animated.div style={props}>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
        <div className="balloon"></div>
      </animated.div>
      <ReactTypingEffect
        text="Вітаю з днем народження"
        className="textGreeting"
      />
      <br />
      <Link to="/card">
        <div className="wrapper">
          <button className="button">
            Листівка
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {/* <button>Галерея</button> */}
      </Link>
    </div>
  );
}
