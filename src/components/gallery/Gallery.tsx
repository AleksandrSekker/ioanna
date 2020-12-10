import React, { ReactElement } from 'react';
import '../../scss/gallery/Gallery.scss';
interface Props {}

export default function Gallery({}: Props): ReactElement {
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" autoFocus placeholder="фільтр" />
        </form>
      </div>
    </div>
  );
}
