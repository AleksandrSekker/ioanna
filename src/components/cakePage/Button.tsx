import React, { ReactElement } from 'react';

interface Props {
  text: string;
}

export default function Button({ text }: Props): ReactElement {
  return (
    <div>
      <button className="vaweButton">
        <div className="wave"></div>
        <span>{text}</span>
      </button>
    </div>
  );
}
