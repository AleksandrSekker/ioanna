import React, { ReactElement } from 'react';
import '../../scss/greeting/Card.scss';

export default function Card(): ReactElement {
  return (
    <div className="card-bg">
      <div className="card">
        <div className="imgBox">
          <div className="bark"></div>
          <img src="https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?cs=srgb&dl=person-holding-yellow-black-eyed-susan-flowers-in-bloom-1697912.jpg&fm=jpg" alt='' />
        </div>
        <div className="details">
          <p>
            Бажаю щоб життя наповнювалось позитивними емоціями. Щоб кожен день
            приносив тільки радість і багато посмішок. Міцного здоров'я і
            успіхів у творчості.
          </p>

          <p className="text-right"></p>
        </div>
      </div>
    </div>
  );
}
